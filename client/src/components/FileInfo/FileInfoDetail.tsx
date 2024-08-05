import styles from './FileInfo.module.css';
export default function FileInfoDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className={styles['file-info-detail']}>
      <div className={styles['file-info-detail-label']}>{label}</div>
      <div className={styles['file-info-detail-value']}>{value}</div>
    </div>
  );
}
