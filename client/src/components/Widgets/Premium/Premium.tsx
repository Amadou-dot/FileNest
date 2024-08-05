import styles from './Premium.module.css';

export default function Premium() {
  return (
    <div className={styles.premium}>
      <div className={styles.title}>
        <i className='ri-folder-add-line'></i>
        <h5>Buy Premium</h5>
      </div>
      <p>Upgrade space now and get a 18% discount</p>
    </div>
  );
}
