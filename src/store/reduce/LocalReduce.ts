import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { contactsReduce, ContactStateType } from "./ContactReduce";


export interface LocalStateType {
    contacts: ContactStateType
}

export interface LocalPayloadType {

}

export const localReduce = combineReducers({ contacts: contactsReduce });