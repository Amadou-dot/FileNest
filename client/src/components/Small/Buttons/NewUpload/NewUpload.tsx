import styles from './NewUpload.module.css';
export default function NewUpload() {
  return (
    <button className={styles['btn--upload']}>
      <i className='ri-add-line'></i>New Upload
    </button>
  );
}
