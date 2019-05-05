
export interface ContactBean {
    id?: string;
    name?: string[];
    phone_v2?: string[];
    [key: string]: string[] | string;
}

const RAW_CONTACT_ID = "raw_contact_id";
const MIMETYPE = "mimetype";
const DATA1 = "data1";
class ContactService {
    static async getContacts(): Promise<ContactBean[]> {
        let contacts: string[][] = await d_c.Contacts.getContacts();
        // 数据的第一行是字段名, 获取需要的字段的列
        let idIndex = contacts[0].indexOf(RAW_CONTACT_ID);
        let mimetypeIndex = contacts[0].indexOf(MIMETYPE);
        let dataIndex = contacts[0].indexOf(DATA1);
        if (idIndex < 0 || mimetypeIndex < 0 || dataIndex < 0) {
            throw new Error("无法确定的通讯录字段. \n" + contacts[0].join(", "));
        }
        // 进行排序, 然后将联系人的所有属性整理
        contacts.sort((l, r) => {
            if (l[idIndex] > r[idIndex]) {
                return 1;
            } else if (l[idIndex] < r[idIndex]) {
                return -1;
            } else {
                return 0;
            }
        });

        contacts = contacts.slice(1);
        let current: number;
        let result: ContactBean[] = [];
        let contact: ContactBean & Object;
        for (let i: number = contacts.length - 1; i >= 0; i--) {
            let nextId = Number.parseFloat(contacts[i][idIndex]);
            // 新的用户
            if (current !== nextId) {
                contact = {};
                result.push(contact);
                // 只让 id 值为 string, 其他属性都为 string[]
                contact.id = contacts[i][idIndex];
                let propName = contacts[i][mimetypeIndex];
                let match = /([^\/]*)$/.exec(contacts[i][mimetypeIndex]);
                if (match) {
                    propName = match[1];
                }
                if (!contact.hasOwnProperty(propName)) {
                    contact[propName] = [];
                }
                (contact[propName] as string[]).push(contacts[i][dataIndex]);
            }
        }
        return result;
    }
}

export {
    ContactService
}