
import { NavLink,} from 'react-router-dom'
import routes from '../../routes/routes';

import DarkModeToggle from "react-dark-mode-toggle";
import classes from './NavBar.module.css';

const NavBar = (props) => {
  
    return (
        <div className={classes.navRoot}>
            <div className={classes.toogler} >
               <div style={{marginTop:10,marginRight:10}}>
                    <p>{props.isDark?"Light":"Dark"}</p>
               </div>
            
                <DarkModeToggle
                    onChange={() => { props.toggleDarkMode() }}
                    checked={props.isDark}
                    size={40}
                />
             </div>
       
              <div className={classes.navMain} >
        
                  {
                      routes.map((route,index)=>{
                          return(
                              <NavLink to={`${route.path}`} className={classes.navItem} activeClassName={classes.navItemActive}>
                                      {route.icon}

                                   <p>{route.name}</p>
                              </NavLink>
                          )
                      })
                  }
              </div>
        </div>
   

    )
}


export default NavBar;