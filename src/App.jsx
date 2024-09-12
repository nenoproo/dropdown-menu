import React, { useState } from 'react';
import profileImg from './img/profile.png';
import user from './img/user-icon.png';
import inbox from './img/email.png';
import data from './img/data-analysis.png';
import settings from './img/settings.png';
import help from './img/costumer-service.png';
import logout from './img/log-out.png';
import DropdownItem from './DropdownItem.jsx';

function App() {

  const [open, setOpen] = useState(false);

  function handleMenuTrigger() {
    setOpen(!open)
  }

  return (
    <div className="App">
      <div className="menu-container"  >
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