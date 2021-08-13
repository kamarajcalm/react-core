import classes from './Classes.module.css'
import {Container} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AiFillDelete} from 'react-icons/ai';
import {
    
    Link,
  
} from "react-router-dom";
const options = [
    "2016","2017","2018","2019","2020"
];
const clases = ["LKG","UKG","CLASS 1"]
const defaultOption = options[0]
const data = [
    {
        uniqueId:"1",
        classTitle:"Class I",
        sections:3
   
    },
    {
        uniqueId:"2",
        classTitle:"Class II",
        sections:3,
    },
    {
        uniqueId:"3",
        classTitle:"Class III",
        sections:3,
    },
]
const Classes  =()=>{
    const [board,setBoard] = useState("STATE")
    console.log(board==="STATE")
    return(


 
        <div className={classes.root}>
           {/*  HEADERS*/}
          <div className={classes.header}>
              <div className={classes.hd1}>
                  <div  className={board==="STATE"?classes.activeBtn:classes.inactiveBtn}
                   onClick ={()=>{setBoard("STATE")}}
                  >
                      STATE
                  </div>
                   <div  className={board==="CBSE"?classes.activeBtn:classes.inactiveBtn}
                   onClick ={()=>{setBoard("CBSE")}}
                   >
                         CBSE
                  </div>
              </div>
              <div className={classes.hd2}>
                      <h1 >CLASSES</h1>
              </div>
              <div className={classes.hd3}>
                      
                    <Dropdown
                        className={classes.DropDownRoot}
                        options={options}
                        placeholder="Year"
                        controlClassName={classes.DropDownRoot}

                    />

    
              </div>
          </div>

                    {/* TABLES */}
            <div className={classes.tableRoot}>
                   <div  className={classes.tableheader1}>
                       <div style={{display:"flex",flex:0.7,alignItems:"center",justifyContent:"space-around"}}>
                                <div style={{}}> 
                                <Dropdown
                                    className={classes.DropDownRoot}
                                    options={clases}
                                    placeholder="Class title"
                                    controlClassName={classes.DropDownRoot}

                                /> 
                            </div>
                            <div>
                                <input 
                                    className={classes.textInput}
                                    type="text" 
                                    id="" 
                                    name=""
                                    placeholder="Sections"
                                />
                            </div>
                       </div>
                        <div style={{display:"flex",flex:0.3,alignItems:"center",justifyContent:"center"}}>
                              <div className={classes.btn}>
                                 Add
                                 
                              </div>
                        </div> 
                   </div>
           

             <div className={classes.tableheader2}>

    
            <Table responsive style={{marginTop:25}}>
                <thead>
                    <tr>
                        <th className={classes.Link}>#</th>
                        <th className={classes.Link}>UNIQUE ID</th>
                        <th className={classes.Link}>CLASS TITLE</th>
                        <th className={classes.Link}>SECTIONS</th>
                        <th className={classes.Link}></th>
                          
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                                return(
                                    <tr>
                                        <td className={classes.Link}>{index+1}</td>
                                        <td className={classes.Link}>{item.uniqueId}</td>
                                        <td className={classes.Link}>{item.classTitle}</td>
                                        <td className={classes.Link}>{item.sections}</td>
                                    
                                        <th >
                                            <AiFillDelete size={20} color={"red"}/>
                                        </th>
                                        
                                  
                                       
                                     
                                    </tr>
                                )
                        })
                    }
          
                </tbody>
            </Table>
                     </div>
                
            </div>
        </div>
              
    )
}

export default Classes;