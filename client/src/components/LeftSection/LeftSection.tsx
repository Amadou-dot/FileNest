import SideBar from '../SideBar/SideBar';
import SignOut from '../Small/Buttons/SignOut/SignOut';
import styles from './LeftSection.module.css';
export default function LeftSection() {
  return (
    <section className={styles['left-section']}>
      <SideBar />
      <SignOut />
    </section>
  );
}
