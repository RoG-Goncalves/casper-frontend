import http from '../http-common';


const getAll = () => {
    return http.get('/news');
  };

const create = (data) => {
    return http.post('/news/create/', data);
  };

const login = (data) =>{
    return http.post('/auth/login', data)
}
const deleteOne = (data) =>{
  return http.delete(`/news/${data}`)
}

  export default {
    getAll,
    create,
    login, 
    deleteOne
  };