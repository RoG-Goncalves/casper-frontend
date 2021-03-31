import React, {useState} from 'react';
import ModalInsertEditNews from './ModalInsertEditNews'

import './SingleNews.css';

const SingleNews = ({singleNews,updateOnDelete}) => {
    const {title, subtitle,section, imageUri, postback} = singleNews;
    const splittedSection = section.split('.');
   
    const [isModalOpen,setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className='wrapper'>
            {isModalOpen && <ModalInsertEditNews
            newsInfo={singleNews}
            onClose={handleCloseModal}
            updateOnDelete={updateOnDelete}
            />}
            <div onClick={handleOpenModal} className='singleNewsWrapper'>
            <div className='img'><img src={imageUri} alt={title}/></div>
            <div className='infos'>
                <div ><strong>Seção - {splittedSection[1].toUpperCase()}</strong></div>
                <div ><strong><h2>{title}</h2></strong>
                <strong>{subtitle}</strong></div>
                <div >{postback}</div>
            </div>
            </div>
            
        </div>
        )
}

export default SingleNews;