import useMenuBtnHandler from '../../../handlers/MenuBtnHandler';
import styles from './IconButtons.module.css';

export default function IconButtons() {
  const toggleMenu = useMenuBtnHandler();
  return (
    <div className={styles['icon-btns']}>
      <i className='ri-notification-line'></i>
      <i className='ri-message-3-line'></i>
      <i className={`ri-menu-line ${styles['menu-btn']}`} onClick={toggleMenu}></i>
    </div>
  );
}