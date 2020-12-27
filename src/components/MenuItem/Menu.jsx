import React from 'react';
import styles from './Menu.module.css';

export default function MenuItem (props){
    const {item, theme} = props;
    return (
        <div className={styles.menuItem} style={item.active ? { background: theme.background, color: theme.foreground } : {}}>
        <img className={styles.icon} src={item.src} alt=''/>
          <span>{item.title}</span>
        </div>
    );
}