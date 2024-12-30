import { toast } from "react-toastify";
import { v4 } from "uuid";
import ActionTypes from "../actionTypes";




const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    //action type'ına göre state'ın nasıl değiştiğine karar ver
    switch (action.type) {
        //ADD aksiyonu tetiklenirse todo oluşturur
        case ActionTypes.ADD:

            //-todo nesnesi oluştur
            const newTodo = {
                id: v4(),
                text: action.payload,
                is_done: false,
                createdAt: new Date().toLocaleDateString(),
            };

            //nesneyi diziye ekle
            const added = state.todos.concat(newTodo);

            toast.success("todo oluşturuldu");

            //state'i güncelle
            return { todos: added };


        //DELETE aksiyonu tetiklenirse todo'yu kaldır
        case ActionTypes.DELETE:
            //payload ile gelen id'yi diziden kaldır
            const filtred = state.todos.filter((i) => i.id !== action.payload);

            toast.error("todo silindi");

            return { todos: filtred };

        //UPDATE aksiyonu tetiklenirse dizidki eski elemanı güncellemeliyim
        case ActionTypes.UPDATE:
            const updated = state.todos.map((item) => item.id === action.payload.id ?
                action.payload : item);

            toast.info("todo güncellendi");

            return { todos: updated };


        default:
            return state;

    }

};
export default todoReducer;