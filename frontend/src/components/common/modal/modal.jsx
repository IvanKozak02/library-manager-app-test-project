import './modal.css'
import React from "react";
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {actions as uiActions} from "../../../store/uiSlice/ui-slice.js";

const Modal = ({children}) => {

    const isOpenModal = useSelector(state => state.ui.isModalOpen);
    const dispatch = useDispatch();

    const handleCloseBtnClick = () => {
        dispatch(uiActions.setModalState(false));
    }

    return (
        <div hidden={!isOpenModal}>
            <div className="modal">
                <div className="book-popup">
                    <Button label='×'
                            className="book-popup__close"
                            onClick={handleCloseBtnClick}
                    >
                    </Button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;