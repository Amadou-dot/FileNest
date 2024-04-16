import './SideBar.css';
import Item from '../Item/Item';
export default function SideBar() {
  return (
    <div className='sidebar'>
      <h2>My docs</h2>
      <Item name='Dashboard' icon='ri-apps-line' active/>
      <Item name='Your Files' icon='ri-folder-line' />
      <Item name='Your Disks' icon='ri-hard-drive-3-line' />
      <Item name='Protected' icon='ri-folder-lock-line' />
      <Item name='Favorites' icon='ri-star-line' />
      <Item name='Trash' icon='ri-delete-bin-5-line' />
      <Item name='Settings' icon='ri-settings-3-line' />
    </div>
  );
}
