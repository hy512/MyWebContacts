package example.contacts.cordova.xjlearn.service;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.database.Cursor;
import android.provider.ContactsContract;

public class ContactService implements IService {
	private Context context;

	public ContactService(Context context) {
		this.context = context;
	}

	@Override
	public List<String[]> select() {
		String[] fields = new String[]{
				ContactsContract.Data._ID,
				ContactsContract.Data.RAW_CONTACT_ID, // 一样的 raw contact id 表示同一个联系人
				ContactsContract.Data.MIMETYPE,
				ContactsContract.Data.DATA1,
				ContactsContract.Data.DATA2,
				ContactsContract.Data.DATA3,
				ContactsContract.Data.DATA4,
				ContactsContract.Data.DATA5,
				ContactsContract.Data.DATA6,
				ContactsContract.Data.DATA7,
				ContactsContract.Data.DATA8,
				ContactsContract.Data.DATA9,
				ContactsContract.Data.DATA10,
				ContactsContract.Data.DATA11,
				ContactsContract.Data.DATA12,
				ContactsContract.Data.DATA13,
				ContactsContract.Data.DATA14
				// ContactsContract.Data.DATA15 // Blob 数据类型
		};

		Cursor cursor = context
				.getContentResolver()
				.query(
						ContactsContract.Data.CONTENT_URI,
						fields, null, null, null);
		
		List<String[]> list = new ArrayList<>();
		String[] row ;
		list.add(fields);
		while(cursor.moveToNext()) {
			row = new String[fields.length];
			for (int i=fields.length-1; i>=0; i--) {
				row[i] = cursor.getString(i);
			}
			list.add(row);
		}
		cursor.close();
		return list;
	}

}
