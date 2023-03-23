

const DeleteModal = ( {deleteUserAction, onCloseModal } ) => {
  

    const confirmDelete = (id) => {

      
            deleteUserAction(id)
        }
    


    return (
        <div>
     
            <h4>Seguro que quieres eliminar este producto?</h4>
            <button onClick={confirmDelete}>Si</button>
            <button onClick={onCloseModal}>No</button>

        </div>
    );
};

export default DeleteModal;