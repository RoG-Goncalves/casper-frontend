import React, { useState } from 'react';
import newsService from '../services/newsService'

import './Form.css';


const Form = ({newsInfo, onClose, updateOnDelete, updateControl, updateNewsListAfterCreating}) => {
  let initialNewsState = [];

  if(newsInfo != null){

    const{title,subtitle,section,imageUri,postback} = newsInfo;
    const sectionSplitted = section.split('.')

    initialNewsState = {
      id: null,
      title,
      subtitle,
      section:sectionSplitted[1],
      imageUri,
      buttonText: 'Siga a notícia',
      postback
    };
  } 
  else{
    initialNewsState = {
      id: null,
      title:'',
      subtitle:'',
      section:'',
      imageUri:'',
      buttonText: 'Siga a notícia',
      postback:''
    };
  }
    
    
    const [news,setNews] = useState(initialNewsState);
    const [submitted, setSubmitted] = useState(false);


    const handleInputChange = (event) =>{
      const {name,value} = event.target;
      
      setNews({
        ...news,
        [name]: value
      })
    }
    const saveNews = async () =>{
      if(news.title && news.subtitle && news.section && news.imageUri && news.postback ){

        var data = {
          title: news.title,
          subtitle: news.subtitle,
          section:news.section,
          imageUri: news.imageUri,
          buttonText: news.buttonText,
          postback: news.postback
        }
        newsService.create(data)
          .then((response) => {
              setNews({
              title: response.title,
              subtitle: response.subtitle,
              section:response.section,
              imageUri: response.imageUri,
              postback: response.postback
              });
              setSubmitted(true);

          })
          .catch((e) => {
            console.log(e);
          });
          updateNewsListAfterCreating();
      }
      else{
        alert('Todos os dados devem ser preenchidos')
      }
    } 
    
    const newNews = () => {
      setNews(initialNewsState);
      setSubmitted(false);
    };


    const handleDelete = async () =>{
      updateOnDelete(newsInfo.id)
      const res = await newsService.deleteOne(newsInfo.id);
      alert(res.data)
      onClose();
    }
        return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>News adicionada com sucesso!</h4>
              <button onClick={newNews}>
                Adicionar outra News
              </button>
            </div>
          ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="title">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={news.title}
                    required
                    onChange={handleInputChange}
                    name="title"
                  />
                </div>
    
                  <div className="form-group">
                  <label htmlFor="subtitle">Subtítulo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subtitle"
                    value={news.subtitle}
                    required
                    onChange={handleInputChange}
                    name="subtitle"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="section">Tipo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="section"
                    required
                    value={news.section}
                    onChange={handleInputChange}
                    name="section"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="imageUri">Link da Imagem</label>
                  <input
                    type="text"
                    className="form-control"
                    id="imageUri"
                    required
                    value={news.imageUri}
                    onChange={handleInputChange}
                    name="imageUri"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postback">Link da Notícia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postback"
                    required
                    value={news.postback}
                    onChange={handleInputChange}
                    name="postback"
                  />
                </div>
                {newsInfo?
                <div> 
                  <button>
                    Update
                  </button> 
                  <button onClick={handleDelete}>
                    Delete
                  </button>
                </div> : 
                <button onClick={saveNews}  className="btn btn-success">
                  Enviar
                </button>
                }
                
              </div>
            )}
        </div>
      );



   
}

export default Form;