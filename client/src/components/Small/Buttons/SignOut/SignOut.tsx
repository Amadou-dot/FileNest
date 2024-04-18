import { Link } from 'react-router-dom';
import styles from './SignOut.module.scss';

export default function SignOut() {
  return (
    <Link className={styles.signOut} to='login'>
      <i className='icon ri-logout-box-r-line'></i>
      <h3 className={styles.headingT}>Sign Out</h3>
    </Link>
  );
}
