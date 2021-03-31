import React, { useState } from 'react';
import newsService from '../services/newsService';
import NewsPanel from '../views/NewsPanel';
import ModalInsertEditNews from './ModalInsertEditNews'

import './Login.css';

const Login = (props) =>{
    const initialUser = '';

    const [user, setUser] = useState(initialUser);
    const [loggedIn,setLoggedIn] = useState(false);
   

    const handleInputChange = (event) =>{
        
        const user = event.target.value;
        setUser(user)
    }
    const sendLogin = () =>{
        var data = {
            user: user
        }
        newsService.login(data)
        .then((response)=>{
            setLoggedIn(response.data.success)
        })
    }
    const logout = () =>{
        setLoggedIn(false);
    }

    return(
    <div>
        {loggedIn ?
            <div>
                <div>
                    <span>Usuário logado!</span>
                    <button onClick={logout}>Fazer logout</button>
                </div>
                <div>
                    <NewsPanel/>
                </div> 
            </div> :
            <div>
                <div className="form-group">
                <label htmlFor="user">Login</label>
                <input
                    type="text"
                    className="form-control"
                    id="user"
                    required
                    onChange={handleInputChange}
                    name="user"
                />
                <button onClick={sendLogin} className="btn btn-success">
                Logar
                </button>
                </div>
            </div>
        }
       
    </div>
    )

}

export default Login;