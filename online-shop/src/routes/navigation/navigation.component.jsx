import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { UserContext } from "../../context/user.context";
import './navigation.style.scss'

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>
                        <CrwnLogo className="logo"/>
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) 
                        : (<Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>)
                    }
                </div>
            </div>
          <Outlet />  
        </Fragment>
    )
}

export default Navigation;