import QuickAccessItem from './QuickAccessItem/QuickAccessItem';
import styles from './QuickAccess.module.css';
export default function QuickAccess() {
  return (
    <>
      <div className={styles['quick-access']}>
        <QuickAccessItem
          icon='ri-image-fill'
          title='Images'
          files={25}
          totalFiles={500}
        />

        <QuickAccessItem
          icon='ri-file-3-line'
          title='Documents'
          files={399}
          totalFiles={500}
        />
        <QuickAccessItem
          icon='ri-music-2-fill'
          title='Sound'
          files={90}
          totalFiles={1000}
        />
        <QuickAccessItem
          icon='ri-video-on-fill'
          title='Video'
          files={705}
          totalFiles={800}
        />
      </div>
    </>
  );
}
