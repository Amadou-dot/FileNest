import useMenuBtnHandler from '../../../handlers/MenuBtnHandler';
import './IconButtons.css';

export default function IconButtons() {
  const toggleMenu = useMenuBtnHandler();
  return (
    <div className='icon-btns'>
      <i className='ri-notification-line'></i>
      <i className='ri-message-3-line'></i>
      <i className='ri-menu-line' id='menu-btn' onClick={toggleMenu}></i>
    </div>
  );
}