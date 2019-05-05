import { combineReducers } from 'redux'
import { localReduce, LocalStateType } from './LocalReduce';

interface StateType {
    local: LocalStateType
}

export {
    StateType
}

export const rootRecude = combineReducers({ local: localReduce });