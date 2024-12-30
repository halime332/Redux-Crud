import { useSelector } from "react-redux";
import todoReducer from "../redux/redusers/todoReducer";
import Card from "./Card";

const List = () => {
    // useSelector()
    // store'daki verilere abone olmamızı sağlar
    // bir fonksiyon alır ve o fonksiyona parametre olarak store'u gönderir
    const { todos } = useSelector((store) => store.todoReducer);

    return (
        <div>
            {todos.map((todo) => (
                <Card todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default List;