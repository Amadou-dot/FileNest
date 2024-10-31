import styles from './SideBar.module.css';
import Item from '../Item/Item';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <NavLink to='/'><h2>My docs</h2></NavLink>
      <Item name='Dashboard' icon='ri-apps-line' />
      <Item name='Files' icon='ri-folder-line' />
      <Item name='Disks' icon='ri-hard-drive-3-line' />
      <Item name='Protected' icon='ri-folder-lock-line' />
      <Item name='Favorites' icon='ri-star-line' />
      <Item name='Trash' icon='ri-delete-bin-5-line' />
      <Item name='Settings' icon='ri-settings-3-line' />
    </div>
  );
}
