package example.contacts.cordova.xjlearn.reduce;

import example.contacts.cordova.xjlearn.exception.OperationNotSupportedException;

public interface IReduce<T, U, R> 
{
	public R apply(T t, U u) throws OperationNotSupportedException;
}
