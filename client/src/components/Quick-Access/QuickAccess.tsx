import QuickAccessItem from './QuickAccessItem/QuickAccessItem';
import styles from './QuickAccess.module.css';
import { useFiles } from '../../context/useFiles';
export default function QuickAccess() {
  const imageCount = useFiles().imageFiles.length;
  const documentCount = useFiles().documentFiles.length;
  const soundCount = useFiles().soundFiles.length;
  const videoCount = useFiles().videoFiles.length;
  return (
    <>
      <div className={styles['quick-access']}>
        <QuickAccessItem
          icon='ri-image-fill'
          title='Images'
          files={imageCount}
          totalFiles={500}
        />

        <QuickAccessItem
          icon='ri-file-3-line'
          title='Documents'
          files={documentCount}
          totalFiles={500}
        />
        <QuickAccessItem
          icon='ri-music-2-fill'
          title='Sound'
          files={soundCount}
          totalFiles={1000}
        />
        <QuickAccessItem
          icon='ri-video-on-fill'
          title='Video'
          files={videoCount}
          totalFiles={800}
        />
      </div>
    </>
  );
}
