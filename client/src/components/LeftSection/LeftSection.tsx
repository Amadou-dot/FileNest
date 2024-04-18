import SideBar from '../SideBar/SideBar';
import SignOut from '../Small/Buttons/SignOut/SignOut';
import './LeftSection.css';
export default function LeftSection() {
  return (
    <section className='left-section'>
      <SideBar />
      <SignOut />
    </section>
  );
}
