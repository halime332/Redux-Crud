import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions";


const Modal = ({ todo, close }) => {
    const dispatch = useDispatch();
    //inputun referansını oluştur
    const inputRef = useRef(null);

    const handleSave = () => {
        // 1)inputtaki değere eriş
        const newText = inputRef.current.value;
        //2) todo nesnesinin text değerini güncelle
        const updated = { ...todo, text: newText };

        //3)reducer'a todo'nun güncellenmesi gerektiğini haber ver
        // dispatch({ type: ActionTypes.UPDATE, payload: updated });
        dispatch(updateTodo(updated));
        //4) modal'ı kapat
        close();
    };

    return (
        <div className="modal d-block text-dark bg-black bg-opacity-50" >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Todo'yu güncelle</h5>
                        <button onClick={close} type="button" className="btn-close" ></button>
                    </div>
                    <div className="modal-body my-3">
                        <label className="form-label">Yeni başlık</label>
                        <input ref={inputRef} className="form-cotrol shadow" defaultValue={todo.text} />
                    </div>
                    <div className="modal-footer">
                        <button onClick={close} type="button" className="btn btn-secondary" >vazgeç</button>
                        <button onClick={handleSave} type="button" className="btn btn-primary">kaydet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
