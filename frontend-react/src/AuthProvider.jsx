import {useState, useContext, createContext} from 'react'


// Create a context for authentication
const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('access_Token')
    )
  return (
    <>
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children} {/* Means all the other components */}
    </AuthContext.Provider>
      
    </>
  )
}

export default AuthProvider
export {AuthContext}
