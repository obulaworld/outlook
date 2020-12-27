import React from 'react';
import styles from './MailItem.module.css';

export default function MailItem(props) {

    const { mail } = props;

    return (
         <div className={`${styles.mailFirstSectionMails} ${mail.active ? styles.mailFirstSectionMailsActive : ''}`}>
            <div className={styles.mailFirstSectionImage}>
                <img src={mail.src} alt='' />
            </div>
            <div className={styles.mailFirstSectionText}>
                <span className={styles.mailHeader}>{ mail.name }</span>
                <span className={`${styles.mailSubject} ${mail.active ? styles.mailSubjectAvtive : ''}`}>{ mail.subject }</span>
                <span className={styles.mailMessage}> { mail.body }</span>
            </div>
            <div className={styles.mailFirstSectionTime}>
                <span className={styles.mailHeader}>{ mail.time }</span>
            </div>
          </div>
    );
}