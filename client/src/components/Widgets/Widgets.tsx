// import NewUpload from '../Small/Buttons/NewUpload/NewUpload';
import NewUpload from '../Small/Buttons/NewUpload/NewUpload';
import Disk from './Disk/Disk';
import Premium from './Premium/Premium';
import styles from './Widgets.module.css';

export default function Widgets() {
  return (
    <div className={styles.widgets}>
      <Disk />
      <div className={styles.bottom}>
        <NewUpload />
        <Premium />
      </div>
    </div>
  );
}
