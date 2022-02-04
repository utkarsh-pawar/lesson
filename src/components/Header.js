import React from "react";
import '../styles/Header.css'
import Link from "./Link"

const Header = () => {
  return (
    <nav className="header">
      <img
        src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        alt="" 
      />
      <Link />
      
    </nav>
    
  );
};

export default Header;
