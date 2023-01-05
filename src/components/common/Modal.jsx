export const Modal = ({title, handleModal}) => {
    const handleModalClose = (e) => {
        handleModal(e);
    }
    return (
        <div className="back">
            <div className="modal" tabIndex="-1" style={{display: "block"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" onClick={handleModalClose}></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleModalClose}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;