import React, { useState } from 'react';
import NavListData from '../../data/navListData';
import NavListItem from '../NavListItem/NavListItem';
import './SideMenu.css';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTranslation } from 'react-i18next';
// Use o tipo `number` em vez de `Number`
interface NavItem {
  id: number; // Corrigido para `number`
  name: string;
  icon: string;
}

// Definir o tipo para as propriedades do SideMenu
interface SideMenuProps {
  active: boolean;
}


const SideMenu: React.FC<SideMenuProps> = ({ active }) => {
  const [navData, setNavData] = useState<NavItem[]>(NavListData);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className={`SideMenu ${active ? 'active' : ''}`}>
      <a href="#" className='logo'>
        <SportsEsportsIcon />
        <span className='brand'>{t('Common')}</span>
      </a>
      <ul className='nav'>
        {navData.map((item) => (
          <NavListItem key={item.id} item={item} />
        ))}
      </ul>

      <ul className='social'>
        <li>
          <a href="#">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <XIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <YouTubeIcon />
          </a>
        </li>
        <li>
          <a href="#" className='share'>
            <ShareIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
