package example.contacts.cordova.xjlearn;

import java.util.concurrent.ExecutorService;
import java.util.function.Consumer;

import android.app.Activity;

public interface Convenient  {
	public Activity getActivity();
	public ExecutorService getThreadPool();
	public boolean determinePermissions(String permissions[], Consumer<Object> callback);
	public void retrieveResource(String mine, Consumer<Object> callback); 
}
