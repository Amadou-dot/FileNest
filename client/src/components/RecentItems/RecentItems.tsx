import RecentItem from './RecentItem/RecentItem';
import './RecentItems.css';

export default function RecentItems() {
  return (
    <table>
      <tbody>
            <RecentItem icon='ri-image-fill' name='IMG_498.png' extension='PNG' size='2.7' selected={true} />
            <RecentItem icon='ri-file-3-line' name='My Report.docx' extension='Word Document' size='5.4' selected={false} />
            <RecentItem icon='ri-video-on-fill' name='birds.mp4' extension='MP4' size='2.7' selected={false} />
            <RecentItem icon='ri-music-2-fill' name='Like That.mp3' extension='MP3' size='4.4' selected={false} />
        
      </tbody>
    </table>
  );
}
