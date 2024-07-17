import './modal.css'
import React from "react";
import Button from "../button/button";


const Modal = ({children, name, isOpen, onOpenModal, onResetFormData}) => {
    const handleCloseBtnClick = () => {
        onResetFormData();
        onOpenModal(false);
        
        //todo dispatch(uiSlice.closeModal());

    }

    return (
        <div hidden={!isOpen}>
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