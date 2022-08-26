 
import { configureStore } from "@reduxjs/toolkit";
import productSlice from './features/productSlice'
import userSlice from './features/userSlice'
import appApi from './services/appApi'

//persit our store

import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'

// reducers

const reducer = combineReducers({
    user:userSlice,
    product: productSlice,
    [appApi.reducer]:appApi.reducer,
})

const persistConfig = {
    key:'root',
    storage,
    blackList :[appApi.reducerPath, "products"]
};


//persist our store

const persistedReducer= persistReducer(persistConfig,reducer)


//createing the store 

const store = configureStore({
    reducer:persistReducer,
    middleware:[thunk,appApi.middleware]
})

export default store