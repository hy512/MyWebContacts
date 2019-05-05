import { handleActions, Reducer, Action } from 'redux-actions'
import { CONTACT_FETCH, CONTACT_RETRIEVE, CONTACT_UPDATE, CONTACT_SYNC } from '../action/ContactAction';
import { ContactBean } from '@/service/ContactService';

type DataStateType = "start" | "progress" | "end" | "error";

export interface ContactStateType {
    state: DataStateType,
    data: ContactBean[],
    error: Error;
}

export interface ContactPayloadType {
    state: DataStateType,
    data?: ContactBean[],
    error?: Error;
}

export const contactsReduce = handleActions<ContactStateType, ContactPayloadType>({
    [CONTACT_FETCH]: (state, action) => state,
    [CONTACT_SYNC]: (state, action) => state,
    [CONTACT_RETRIEVE]: (state: ContactStateType, action: Action<ContactPayloadType>) => Object.assign({}, state, action.payload),
    [CONTACT_UPDATE]: (state, action) => state,
}, {
        state: "end",
        data: [],
        error: null
    });