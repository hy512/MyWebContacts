package example.contacts.cordova.xjlearn.reduce;

import org.json.JSONArray;

import android.Manifest;
import android.content.Context;
import example.contacts.cordova.xjlearn.Convenient;
import example.contacts.cordova.xjlearn.exception.OperationNotSupportedException;
import example.contacts.cordova.xjlearn.service.ContactService;
import example.contacts.cordova.xjlearn.service.IService;

public class ContactReduce implements IReduce<String, JSONArray, Object>{
	Context context;
	IService service;
	Convenient app;
	
	public ContactReduce(Convenient c) {
		this.app = c;
		this.context = this.app.getActivity();
		this.service = new ContactService(context);
	}
	
	@Override
	public Object apply(String action, JSONArray args) throws OperationNotSupportedException {
		
		switch(action) {
			case "CONTACT:SELECT": 
				// 判断权限
				if(!app.determinePermissions(
						new String[] {Manifest.permission.READ_CONTACTS}, 
						null)) {
					throw new OperationNotSupportedException("权限不足 !");
				}
				
				return new JSONArray(service.select());
			case "CONTACT:INSERT":
				return null;
		}
		return null;
	}

}
