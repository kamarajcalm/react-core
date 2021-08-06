import {useState,}  from 'react';
import './DropDown.css';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
const data = [{ id: 0, label: "ALL" }, { id: 1, label: "SCHOOL" }, { id: 1, label: "COLLEGE" }];

const DropDown = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {selectedItem ? items.find(item => item.id == selectedItem).label : ""}
               {isOpen?<FaAngleDown />:<FaAngleRight/>}
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                    <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DropDown;