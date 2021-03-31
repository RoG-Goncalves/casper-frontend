import React, {useEffect} from 'react';
import Modal from 'react-modal';
import Form from './Form';

import './ModalInsertEditNews.css';


Modal.setAppElement('#root');


export default function ModalInsertEditNews({onClose, newsInfo, updateOnDelete,updateNewsListAfterCreating}) {
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
          document.removeEventListener('keydown', handleKeyDown)
        }
      })
      //----------------------------------------
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose(false)
        }}
    const handleCancelButton = () => {
        onClose(false)
        }

    return (
    <div className="modal">
        <Modal
         closeTimeoutMS={500}
         isOpen={true}

         >
             <div>
                <Form 
                newsInfo={newsInfo} 
                onClose={onClose}
                updateOnDelete={updateOnDelete}
                updateNewsListAfterCreating={updateNewsListAfterCreating}
            
                />
            </div>
            <div>
            <button 
            onClick={handleCancelButton}
            >Cancelar</button>
            </div>
        </Modal>
    </div>
)}

