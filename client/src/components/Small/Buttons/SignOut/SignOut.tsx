import { Link } from 'react-router-dom';
import styles from './SignOut.module.css';

export default function SignOut() {
  return (
    <Link className={styles['sign-out']} to='login'>
      <i className='icon ri-logout-box-r-line'></i>
      <h3>Sign Out</h3>
    </Link>
  );
}
