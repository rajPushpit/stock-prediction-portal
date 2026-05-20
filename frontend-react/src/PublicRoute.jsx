import {useContext} from 'react'
import {AuthContext} from './AuthProvider'
import {Navigate} from 'react-router-dom'


const PublicRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
    // ! if is not (if Is not isLiggdIn)
  return !isLoggedIn ?(
    children
  ): (
    <Navigate to='/dashboard' />
  )
}

export default PublicRoute
