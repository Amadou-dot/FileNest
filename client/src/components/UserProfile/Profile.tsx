import styles from './Profile.module.css';
import profileImg from '../../assets/profile.jpg';
export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <img src={profileImg} alt='' />
        <div className={styles.account}>
          <h5>Reza MK</h5>
          <p>Example@gmail.com</p>
        </div>
      </div>
        <i className='ri-arrow-down-s-line'></i>
    </div>
  );
}
