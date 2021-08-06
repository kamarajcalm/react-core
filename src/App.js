

import { Switch, Route, useRouteMatch}  from 'react-router-dom'

import routes from './routes/routes';
import React, {Suspense,useState ,useEffect} from 'react';
import Loader from './components/Loader';

import Navbar from './layouts/NavBar/NavBar';
import './styles.css'
import subRoutes from './routes/subroutes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  const theme = localStorage.getItem("theme")
  let { path, url } = useRouteMatch();
  const [darkMode, setDarkMode] = useState(theme==="true");
  const toggleDarkMode = () => {
   
    setDarkMode(!darkMode);


  }

  useEffect(() => {
    localStorage.setItem("theme",darkMode);


  }, [darkMode]);

const route = routes.map((route,index)=>{
     return(
       <Route 
         key={index}
         path={route.path}
         exact={route.exact}
         name={route.name}
         render={props => (
           <route.component {...props} />
         )} 
         
         
         />
       
      
     )
})
const subRoute = subRoutes.map((route,index)=>{
  return (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      name={route.name}
      render={props => (
        <route.component {...props} />
      )}


    />


  )
})

  return (
    <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <div 
                className="App"
                data-theme={darkMode ? "dark" : "light"}
                style={{display:"flex",height:"100vh"}}
            >

                <div className="NavBar">
                  <Navbar toggleDarkMode={toggleDarkMode} isDark={darkMode}/>
                </div>
                <div style={{flex:0.85,overflow:"auto",}} id="mainConent">
                    <Switch>
                      {route}
                      {subRoute}
                    
                    </Switch>
                </div>
            
            </div>
     


    </Suspense>
  );
}

export default App;
