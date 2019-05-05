package example.contacts.cordova.xjlearn;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.function.Consumer;
import java.util.function.Function;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import example.contacts.cordova.xjlearn.reduce.ContactReduce;
import example.contacts.cordova.xjlearn.reduce.IReduce;

public class Contacts extends CordovaPlugin implements Convenient {
	public final static String PLUGIN_NAME = "Contacts";
	public final static String PLUGIN_VERSION = "0.0.1";
	
	public IReduce<String, JSONArray, Object>[] reduce;
	
	// 用于 onRequestPermissionResult 或 onActivityResult 等方法的标识码. 
	private int requestCode = 0;
	// 用于请求的回调
	private Map<Integer, Consumer<Object>> callbackMap;
	
	@Override
	public void initialize(
			CordovaInterface cordova,
			CordovaWebView webView) {
		// TODO Auto-generated method stub
		super.initialize(cordova, webView);
		this.reduce = new IReduce[] {
			new ContactReduce(this)
		};
	}
	
	@Override
	public void onActivityResult(
			int requestCode, int resultCode,
			Intent intent) {
		// 执行回调
		if (callbackMap.containsKey(requestCode)) {
			callbackMap.get(requestCode)
				.accept(new Object[] {requestCode, resultCode, intent});
			callbackMap.remove(requestCode);
		}
	}
	
	@Override
	public void onRequestPermissionResult(
			int requestCode,
			String[] permissions,
			int[] grantResults)
			throws JSONException {
		// 执行回调
		if (callbackMap.containsKey(requestCode)) {
			callbackMap.get(requestCode)
				.accept(new Object[] {requestCode, permissions, grantResults});
			callbackMap.remove(requestCode);
		}
	}

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		try {
			for (IReduce<String, JSONArray, Object> reduce : reduce) {
				Object result = reduce.apply(action, args);
				if (result instanceof JSONArray) {
					callbackContext.success((JSONArray)result);
					return true;
				} else if (result instanceof JSONObject) {
					callbackContext.success((JSONObject)result);
					return true;
				}
			}
		} catch(Exception e) {
			e.printStackTrace();
			callbackContext.error(e.getMessage());
		}
		return false;
	}
	
	/**
	 * 调用资源管理器获取资源
	 * @param mine MINE type
	 * @param callback 获取资源后的回调
	 */
	@Override
	public void retrieveResource(String mine, Consumer<Object> callback) {
		Intent intent = new Intent();
		intent.setAction(Intent.ACTION_GET_CONTENT);
		intent.setTypeAndNormalize(mine);
		intent.addCategory(Intent.CATEGORY_OPENABLE);
		int code = requestCode++;
		if (callback != null) {
			callbackMap.put(code, callback);
		}
		cordova.getActivity().startActivityForResult(intent, code);
	}
	
	/**
	 * 判断是否满足权限, 如果有不满足的权限, 发起权限请求
	 * @param permissions 需求的权限
	 * @param callback 请求成功时的回调
	 * @return 是否满足权限, true 满足所有权限, false 有任意权限不满足.
	 */
	@Override
	public boolean determinePermissions(String permissions[], Consumer<Object> callback) {
		// 判断是否小于安卓 6.0
		if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
			return true;
		}
		List<String> less = new ArrayList<>();
		for (String p: permissions) {
			// 没有其中任一权限, 需要重新请求权限
			if (cordova.getActivity().checkSelfPermission(p) 
					!= PackageManager.PERMISSION_GRANTED) {
				less.add(p);
			}
		}
		
		// 请求权限
		if (less.size() > 0) {
			int code = requestCode++;
			if (callback != null) {
				callbackMap.put(code, callback);
			}
			cordova.getActivity().requestPermissions(less.toArray(new String[less.size()]), code);
		}
		return true;
	}
	
	@Override
	public Activity getActivity() {
		return cordova.getActivity();
	}
	
	@Override
	public ExecutorService getThreadPool() {
		return cordova.getThreadPool();
	}
}
