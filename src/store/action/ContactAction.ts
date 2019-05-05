import { Dispatch } from "redux";
import { StateType } from "../reduce";
import { ContactPayloadType } from "../reduce/ContactReduce";
import { Action } from "redux-actions";
import { ContactService } from "@/service/ContactService";


export const CONTACT_FETCH = "fetch the contacts from the server.";
export const CONTACT_SYNC = "sync the contacts to the server.";
export const CONTACT_RETRIEVE = "retrieve the contacts from the local.";
export const CONTACT_UPDATE = "change the contacts in the local.";


export function retrieveContactFromLocal() {
    return function (dispatch: Dispatch<Action<ContactPayloadType>>, getState: () => StateType) {
        dispatch({ type: CONTACT_RETRIEVE, payload: { state: "progress" } });
        return ContactService.getContacts()
            .then(c => dispatch({ type: CONTACT_RETRIEVE, payload: { state: "end", data: c } }))
            .catch(e => dispatch({ type: CONTACT_RETRIEVE, payload: { state: "error", error: e } }));
    }
}