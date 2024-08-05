import { Link } from 'react-router-dom';
import styles from  '../QuickAccess.module.css';
export default function QuickAccessItem({
  icon,
  title,
  files,
  totalFiles,
}: {
  icon: string;
  title: string;
  files: number;
  totalFiles: number;
}) {
  return (
    <Link to={title.toLowerCase()} className={styles.item}>
      <i className={icon}></i>
      <h5>{title}</h5>
      <p>
        {files}/{totalFiles} files
      </p>
    </Link>
  );
}
