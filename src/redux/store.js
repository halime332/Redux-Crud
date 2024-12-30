
import { combineReducers, createStore } from "redux";
import userReducer from "./redusers/userReducer";
import todoReducer from "./redusers/todoReducer";


//birden fazla reducer varsa bunları birleştiririz
const rootReducer = combineReducers({
    todoReducer,
    userReducer,
});
// store oluşturma
const store = createStore(rootReducer);
// projeye tanıtmak için export  et
export default store;