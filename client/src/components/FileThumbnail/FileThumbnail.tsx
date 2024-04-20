import styles from './FileThumbnail.module.css';
export default function FileThumbnail({
  fileName,
  isActive,
}: {
  fileName: string;
  isActive: boolean;
}) {
  return (
    <div
      className={`${styles.fileThumbnail} ${
        isActive ? `${styles.active}` : ''
      }`}>
      <div className={styles.fileIcon}></div>
      <div className={styles.fileName}>{fileName}</div>
    </div>
  );
}

// const icons = {
//   image: 'ri-image-fill',
//   document: 'ri-file-3-line',
//   sound: 'ri-music-2-fill',
//   video: 'ri-video-on-fill',
//   unknown: 'ri-file-3-line',
// };
