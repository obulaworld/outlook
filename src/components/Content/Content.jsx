import React, { useContext } from 'react'

import { ThemeContext } from '../../theme-context';
import styles from './Content.module.css';
import { menu_items, mail_list } from '../../mock_data';
import Menu from '../MenuItem/Menu';
import MailItem from '../MailItem/MailItem';

import expand from '../../assets/expand.svg';
import menu from '../../assets/menu.svg';
import search from '../../assets/search.svg';
import add from '../../assets/add.svg';
import secondImage from '../../assets/secondImage.png';
import marvelLogo from '../../assets/marvel-logo.png';

function Content(props) {

const {changeTheme} = props;

  const theme = useContext(ThemeContext);

  return (
    <div>
     <div className={styles.mailBody}>
      <div className={styles.menuBody}>
        <div className={styles.logo}>
         <img className={styles.icon} src={menu} alt='' />
          <span>Outlook</span>
        </div>
        <div className={styles.dossiers}>
          <span className={styles.dossiersText}>Dossiers</span>
          <img className={styles.icon} src={expand} alt='' />
        </div>
        {menu_items.map((item) => <Menu theme={theme} item={item} />)}
      </div>
      <div className={styles.mailDescription} style={{ background: theme.background, color: theme.foreground }}>
        <div className={styles.mailFirstSection}>
            <div className={styles.rechercher}>
                <div>
                    <img className={styles.icon} src={search} alt='' />
                    <span>Rechercher</span>
                          </div>
                           <span className={styles.themeButton} onClick={changeTheme} style={{ background: theme.background, color: theme.foreground }}>Change Theme</span>
          </div>
          <div className={styles.prioritaire}>
            <span>Prioritaire</span>
            <span className={styles.composeMail}><img className={styles.composeIcon} src={add} alt=''/></span>
          </div>
          {mail_list.map((mail) => <MailItem mail={mail} />)} 
        </div>
        <div className={styles.mailSecondSection}>
          <div className={styles.justIcons}>
            <span></span>
          </div>
          <div className={styles.marvelTextContainer}>
            <span>Marvel</span>
          </div>
          <div className={styles.marvelLogoContainer}>
            <img src={marvelLogo} alt=''/>
            <span className={styles.browserViewText}>View in Browser</span>
          </div>
          <div className={styles.welcomeWrapper}>
          <div>
             <img className={styles.secondImage} src={secondImage} alt='' />
          </div>
          <div className={styles.welcome}>
            <span>Welcome to Marvel</span>
          </div>
          <div className={styles.welcomeMessage}>
            <span>We are excited to have you onboard, now you have access to all the core functionality you need to build digittal products - wireframe, prototype and generate design specs in one place. Here are a few resources o help you get started</span>
          </div>
          </div>
          
        </div>
      </div>
     </div>
    </div>
  );
}

export default Content;
