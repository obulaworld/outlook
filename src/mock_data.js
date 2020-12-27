import pen from './assets/pen.svg';
import cancel from './assets/cancel.svg';
import archive from './assets/archive.svg';
import office from './assets/office.svg';
import paper from './assets/paper.svg';
import trash from './assets/trash.svg';
import felix from './assets/felix.png';
import jimmy from './assets/jimmy.png';
import lili from './assets/lili.png';
import marvel from './assets/marvel.png';
import elie from './assets/elie.png';
import styles from './components/Content/Content.module.css';

export const menu_items = [
    {
        classname: styles.menuItem,
        title: 'Boite de reception',
        iconClassname:  styles.icon,
        src: archive,
        active: true,
    },
    {
        classname: styles.menuItem,
        title: 'Courrier indesirables',
        iconClassname:  styles.icon,
        src: cancel,
         active: false,
    },
    {
        classname: styles.menuItem,
        title: 'Brouillons',
        iconClassname:  styles.icon,
        src: pen,
         active: false,
    },
    {
        classname: styles.menuItem,
        title: 'Elements envoyes',
        iconClassname:  styles.icon,
        src: paper,
         active: false,
    },
    {
        classname: styles.menuItem,
        title: 'Elements supprimes',
        iconClassname:  styles.icon,
        src: trash,
         active: false,
    },
    {
        classname: styles.menuItem,
        title: 'Archives',
        iconClassname:  styles.icon,
        src: archive,
         active: false,
    },
    {
        classname: styles.menuItem,
        title: 'Notes',
        iconClassname:  styles.icon,
        src: office,
         active: false,
    },
]

export const mail_list = [
    {
        name: 'Felix',
        subject: 'C\'est chouchou que je veux',
        body: 'Figurez-vous que Theresa n\'est pas moche, elle n\'a pas un physique facile. C\'est different...',
        active: false,
        time: '8:56',
        src: felix
    },
     {
        name: 'Lili',
        subject: 'C\'est qui le je Schtroumpf',
        body: 'Des problemes il en a pas un il en a des milliers regarde le c\'est un psycopathe ce mec !',
        active: false,
        time: '7:22',
        src: lili,
    },
      {
        name: 'Marvel',
        subject: 'Welcome to Marvel',
        body: 'We are excited to have you onboard, now you have access to all the core functionality you ...',
        active: true,
        time: '2:50',
        src: marvel
    },
       {
        name: 'Elie Yaffa',
        subject: 'Ma question preferee',
        body: 'Les rappeurs m\'envient, sont tous en galere. Un jour de mon salaire c\'est leur assurance vie',
        active: false,
        time: '1:02',
        src: elie
    },
        {
        name: 'Orelsan',
        subject: 'Jimmy Punchline',
        body: 'J\'ecris des textes tires pas les cheveux comme ta meuf en levrette',
        active: false,
        time: '0:1',
        src: jimmy
    },
]