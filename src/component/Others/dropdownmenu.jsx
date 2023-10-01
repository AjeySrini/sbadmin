import React, { useState, useEffect, useRef } from 'react';

function DropdownMenu() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="dropdown-container">
      <div className="icon" onClick={toggleDropdown}>
        <i className="fas fa-caret-down"></i>
      </div>
      <div className={`dropdown ${isDropdownVisible ? 'active' : ''}`} ref={dropdownRef}>
        <ul>
          <li>Dropdown Header:</li>
          <li>Action</li>
          <li>Another action</li>
          <li>Something else here</li>
        </ul>
      </div>
    </div>


  );
}

export default DropdownMenu;
