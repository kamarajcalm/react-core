
import Classes from './InstituteView.module.css';

import { Switch, Route, useRouteMatch} from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import routes from './routes/routes';

const InstituteView =()=>{
    let { path, url } = useRouteMatch();
   console.log(routes)
    const route = routes.map((route,index)=>{
      return(
         <Route
            key={index}
            path={`${url}/${route.name}`}
            exact={route.exact}
            name={route.name}
            render={props => (
               <route.component {...props} />
            )}


         />
      )
    })
    return(
       <div className={Classes.mainDiv}>
             <div className={Classes.navDiv}>
                <NavBar />
             </div>
             <div className={Classes.mainContent}>
                <Switch>

                      {route}
         
                </Switch>
          
             </div>
       </div>
    )
}

export default InstituteView;