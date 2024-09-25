import React from 'react';
import './header.css';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  toggleActive: () => void; // Define a função toggleActive que não recebe parâmetros e não retorna nada
}

const Header: React.FC<HeaderProps> = ({ toggleActive }) => {
  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <MenuIcon />
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <CircleNotificationsIcon />
          <span className="like">0</span>
        </a>
        <a href="#" className="icon">
          <Brightness6Icon />
        </a>

        <div className="avatar">
          <a href="#" className="icon">
            <img 
              src="https://i.pinimg.com/736x/58/dd/8c/58dd8c8b12c0755e5b71643eeab3d39f.jpg" 
              alt="User Image" 
            />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
