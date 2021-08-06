
import { useEffect } from 'react';
import {Container} from 'react-bootstrap'
import DropDown from '../../components/dropdown/DropDown';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classes from './InstitutePage.module.css';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';
import {
    
    Link,
  
} from "react-router-dom";
const options = [
    'ALL', 'SCHOOL', 'COLLEGE',
];
const data = [
    {
        uniqueId:"12c",
        name:"Anna University",
        type:"College",
        Address:"Chennai",
        ContactNo:7964060,
    },
    {
        uniqueId: "12c",
        name: "Periyar University",
        type: "College",
        Address: "Chennai",
        ContactNo: 7964060,
    },
    {
        uniqueId: "12c",
        name: "Salem University",
        type: "College",
        Address: "Chennai",
        ContactNo: 7964060,
    }
]
const defaultOption = options[0]
const InstitutePage = (props) => {
    useEffect(() => {
        var mainDiv = document.getElementById('mainConent');
        mainDiv.scrollTop = 0;
    }, [])
    return (
       <Container fluid >
            <div>
                <h1 className="text-center mt-2">INSTITUTIONS</h1>
            </div>
           <div className={classes.root}>
               
                <div style={{ width: "10vw" }}>
                    <Dropdown
                        className={classes.DropDownRoot}
                        options={options}
                        value={defaultOption}
                        placeholder="Select an option"
                        controlClassName={classes.DropDownRoot}

                    />

                </div>
                <div>
                    <input
                        className={classes.textInput}
                        placeholder={"ENTER UNIQUE ID /INSTITUTE NAME"}
                    />
                </div>
                <div>
                    <button className={classes.btn}>
                        CREATE
                    </button>
                </div>
           </div>
            <Table responsive style={{marginTop:25}}>
                <thead>
                    <tr>
                        <th className={classes.Link}>#</th>
                        <th className={classes.Link}>UNIQUE ID</th>
                        <th className={classes.Link}>NAME</th>
                        <th className={classes.Link}>TYPE</th>
                        <th className={classes.Link}> ADDRESS</th>
                        <th className={classes.Link}>CONTACT NO</th>
                        <th className={classes.Link}>ACTION</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                                return(
                                    <tr>
                                        <td className={classes.Link}>{index+1}</td>
                                        <td className={classes.Link}>{item.uniqueId}</td>
                                        <td className={classes.Link}>{item.name}</td>
                                        <td className={classes.Link}>{item.type}</td>
                                        <td className={classes.Link}>{item.Address}</td>
                                        <td className={classes.Link}>{item.ContactNo}</td>
                                        <td>
                                            <Link
                                                className={classes.Link}
                                                to={`/institute/${item.uniqueId}`}

                                            >VIEW</Link>
                                        </td>
                                       
                                     
                                    </tr>
                                )
                        })
                    }
          
                </tbody>
            </Table>
       </Container>
    )
}

export default InstitutePage;