import React, {createContext} from 'react';

const context = createContext();

const AuthContext = ({children}) => {
    return (
        <context.Provider>
            {children}
        </context.Provider>
    )
}

export {context, AuthContext};