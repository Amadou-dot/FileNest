import styles from './FileThumbnail.module.css';

// const icons = {
//   image: 'ri-image-fill',import styles from './FileThumbnail.module.css';

export default function FileThumbnail({
  fileName,
  isActive,
  imageUrl,
}: {
  fileName: string;
  isActive: boolean;
  imageUrl: string;
}) {
  return (
    <div
      className={`${styles.fileThumbnail} ${
        isActive ? `${styles.active}` : ''
      }`}>
      <div className={styles.fileIcon}>
        <img src={imageUrl} alt={fileName} />
      </div>
      <div className={styles.fileName}>{fileName}</div>
    </div>
  );
}
//   document: 'ri-file-3-line',
//   sound: 'ri-music-2-fill',
//   video: 'ri-video-on-fill',
//   unknown: 'ri-file-3-line',
// };
