import RightSection from '../RightSection/RightSection';
import styles from './FileInfo.module.css';
import FileInfoDetail from './FileInfoDetail';

const icons = {
  image: 'ri-image-fill',
  document: 'ri-file-3-line',
  audio: 'ri-music-2-fill',
  video: 'ri-video-on-fill',
  unknown: 'ri-file-3-line',
};
const extensions = {
  image: ['jpg', 'png', 'gif', 'bmp', 'svg', 'webp', 'jpeg'],
  document: ['docx', 'ppt', 'xlsx', 'pdf', 'txt', 'doc', 'csv', 'pptx', 'odt'],
  audio: ['mp3', 'wav', 'ogg', 'flac', 'aac'],
  video: ['mp4', 'mov', 'mkv', 'avi', 'flv', 'wmv'],
  unknown: ['file'],
};

const dateCreated = new Date().toLocaleDateString();
const getFileType = (fileName: string) => {
  if (fileName.includes('.')) {
    const extension = fileName.split('.').pop();
    if (extensions.image.includes(extension!)) return 'image';
    if (extensions.document.includes(extension!)) return 'document';
    if (extensions.audio.includes(extension!)) return 'audio';
    if (extensions.video.includes(extension!)) return 'video';
  }
  return 'unknown';
};
/**
 *
 * @param activeFile The name of the active file/ clicked file
 * @returns Right section with details about the active file depending on the type of the file
 */
export default function FileInfo({ activeFile }: { activeFile: string }) {
  const duration = '3:40';
  const frameWidth = '1080';
  const frameHeight = '1920';
  const frameRate = '30 frames/second';
  const bitRate = '6858 kbps';
  const dimension = '1920 x 1080';
  const size = '3.5 MB';
  const fileType = getFileType(activeFile);
  return (
    <RightSection className={styles['right-section']}>
      <div className={styles['file-info']}>
        <div className={styles['file-info-header']}>
          <div className={styles['file-info-icon']}>
            <i className={icons[fileType]}></i>
          </div>
          <div className={styles['file-info-name']}>{activeFile}</div>
        </div>

        <div className={styles['file-info-details']}>
          <FileInfoDetail label='Type' value={fileType} />
          <FileInfoDetail label='Size' value={size} />
          <FileInfoDetail label='Date created' value={dateCreated} />

          {(fileType === 'audio' || fileType === 'video') && (
            <FileInfoDetail label='Duration' value={duration} />
          )}
          {fileType === 'video' && (
            <>
              <FileInfoDetail label='Frame height' value={frameHeight} />
              <FileInfoDetail label='Frame width' value={frameWidth} />
              <FileInfoDetail label='Frame rate' value={frameRate} />
              <FileInfoDetail label='Bit rate' value={bitRate} />
            </>
          )}
          {fileType === 'image' && (
            <FileInfoDetail label='Dimension' value={dimension} />
          )}
        </div>
      </div>
    </RightSection>
  );
}
