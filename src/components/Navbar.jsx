import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';


const Navbar = () => {

  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of the selected item

  const handleItemClick = (item) => {
    console.log('Clicked item:', item);
    setSelectedItem(item); // Update the selected item state
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className={selectedItem === 'home' ? 'selected' : ''} onClick={() => handleItemClick('home')}>
            <Link to="/">home</Link>
          </li>
          <li className={selectedItem === 'project' ? 'selected' : ''} onClick={() => handleItemClick('project')}>
            <Link to="/Project">project</Link>
          </li>
          <li className={selectedItem === 'blog' ? 'selected' : ''} onClick={() => handleItemClick('blog')}>
            <Link to="/Blog">blog</Link>
          </li>
        </ul>
      </nav>
    </>

  );
};

export default Navbar;
