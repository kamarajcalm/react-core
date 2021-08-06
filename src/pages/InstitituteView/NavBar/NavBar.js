
import { NavLink, useRouteMatch } from 'react-router-dom'
import routes from '../routes/routes';
import { FaArrowLeft} from 'react-icons/fa';

import classes from './NavBar.module.css';

const NavBar = (props) => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className={classes.Arrow}>
                <NavLink to={'/institute'} className={classes.link} >
                    <FaArrowLeft  />
                </NavLink>
                
            </div>
            <div className={classes.navRoot}>

       
            {
                routes.map((item,index)=>{
                   return(
                       
                       <NavLink key={index} to={`${url}/${item.name}`} className={classes.navLink} activeClassName={classes.navLinkActive}>
                          
                               {item.name.toUpperCase()}
                       
                      
                       </NavLink>
                   )
                })
            }
            </div>
        </div>


    )
}


export default NavBar;