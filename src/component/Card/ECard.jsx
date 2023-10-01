/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState , useEffect, useRef} from 'react';
import { LineChart } from './Line';
import DropdownMenu from '../Others/dropdownmenu';

const EarningCard = ()=>{
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
        return(
            
            <div className='col-xl-8 col-lg-7  mt-4 '>
            <div className='card shadow mb-4'>
                <div className='card-header py-3 flex flex-row items-center justify-between'>
                    <h6 className="m-0 font-bold text-primary">Earnings Overview</h6>
                    <div className="dropdown no-arrow" >
                    <div className="icon" onClick={toggleDropdown} ref={dropdownRef}>    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" onClick={toggleDropdown}></i>
                    {isDropdownVisible && (
      
            <DropdownMenu />
        
      )}                   
        </div>
                </div>
                </div>
                <div className='card-body'>
                    <div className="chart-area">
                        <LineChart/>
                    </div>
                </div>
            
        </div>
        </div>
        
        )
    }

    export default EarningCard