import React, {useState,useEffect} from 'react';
import newsService from '../services/newsService';
import SingleNews from '../components/SingleNews'
import ModalInsertEditNews from './ModalInsertEditNews'

const News = () =>{
    
    const [allNews,setAllNews] = useState([]);
    const [updateControl,setUpdateControl] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false);

    let downloadedNews = Object.assign([],allNews)

    useEffect(()=>{
        const fetchNews = async () => {
            const res = await newsService.getAll();
            const json = await res.data
            
            const eachNews = json.map(({id,title,subtitle,imageUri,postback, section}) => {
                return{
                    id,
                    title,
                    subtitle,
                    imageUri,
                    postback,
                    section
                };
            }
            );
            
            console.log("IMPRIME")
            setAllNews(eachNews); 
        };
        fetchNews();
    },[updateControl]);
    
    const handleMagicClick = () => {
        setIsModalOpen(true);
    }
      const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    const updateNewsListAfterDeleting = (id) =>{
        
         downloadedNews = downloadedNews.filter(eachNews => eachNews.id !== id);

        if(updateControl){
            setUpdateControl(false)
        } 
        else{setUpdateControl(true)}
        
    }
    const updateNewsListAfterCreating = () => {
        if(updateControl){
            setUpdateControl(false)
        } 
        else{setUpdateControl(true)}
    }

    return(
        <div>
           {downloadedNews
             .map(eachNews => {
               return(
                   <div key={eachNews.id}>
                       <SingleNews 
                       singleNews={eachNews}
                       updateOnDelete={updateNewsListAfterDeleting}
                       />
                       
                    </div>
               )
           }) }
            <div>
                <button onClick={handleMagicClick} className='buttonToAdd'>+ Adicionar news</button>
                {isModalOpen && <ModalInsertEditNews
                onClose={handleCloseModal}
                updateNewsListAfterCreating={updateNewsListAfterCreating}
                />}
            </div>
        </div>
    )
}

export default News;
    
       
    

