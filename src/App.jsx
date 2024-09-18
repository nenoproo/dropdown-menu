import React, { useState, useEffect, useRef } from 'react';
import profileImg from './images/profile.png';
import user from './images/user-icon.png';
import inbox from './images/email.png';
import data from './images/data-analysis.png';
import settings from './images/settings.png';
import help from './images/costumer-service.png';
import logout from './images/log-out.png';
import DropdownItem from './DropdownItem.jsx';

function App() {

  const [open, setOpen] = useState(false);

  function handleMenuTrigger() {
    setOpen(!open)
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef} >
        <div className="menu-trigger" onClick={handleMenuTrigger}>
          <img src={profileImg} />
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <div className="dropdown-menu-headings">
            <h3>Steven James</h3>
            <h5>Professional Musician</h5>
          </div>

          <ul>
            <DropdownItem
              img={user}
              text="My Profile"
            />
            <DropdownItem
              img={inbox}
              text="Inbox"
            />
            <DropdownItem
              img={data}
              text="Analytics & Data"
            />
            <DropdownItem
              img={settings}
              text="Account Settings"
            />
            <DropdownItem
              img={help}
              text="Support"
            />
            <DropdownItem
              img={logout}
              text="Log Out"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;