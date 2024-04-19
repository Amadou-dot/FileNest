import MainContent from '../components/Main/MainContent';
import RightSection from '../components/RightSection/RightSection';

// import styles from "./Files.module.css";
import '../components/RecentItems/RecentItems.css';
export default function Files() {
  const fileNames = [
    // Images
    'sunset.jpg',
    'mountain_view.png',
    'flower_garden.jpeg',
    'beach_vacation.gif',
    'city_skyline.bmp',
    'forest_path.jpg',
    'portrait_photo.png',
    'wildlife_capture.jpg',
    'abstract_art.png',
    'family_pic.jpg',
    // Documents
    'report.docx',
    'presentation.ppt',
    'budget.xlsx',
    'resume.pdf',
    'meeting_minutes.txt',
    'project_plan.doc',
    'research_paper.pdf',
    'proposal.docx',
    'user_manual.pdf',
    'invoice.xlsx',
    // Sounds
    'ocean_waves.mp3',
    'birdsong.wav',
    'rainfall.ogg',
    'piano_music.mp3',
    'thunderstorm.wav',
    'guitar_solo.mp3',
    'wind_chimes.ogg',
    'drum_beat.wav',
    'ambient_noise.mp3',
    'fire_crackling.wav',
    // Videos
    'travel_vlog.mp4',
    'tutorial_video.mov',
    'funny_clip.mp4',
    'music_video.mkv',
    'nature_documentary.mp4',
    'interview_video.mov',
    'animation_short.mp4',
    'sports_highlight.mp4',
    'vlog_series.mp4',
    'movie_trailer.mkv',
  ];
  const icons = {
    image: 'ri-image-fill',
    document: 'ri-file-3-line',
    sound: 'ri-music-2-fill',
    video: 'ri-video-on-fill',
    unknown: 'ri-file-3-line',
  };
  const extensions = {
    image: ['jpg', 'png', 'gif', 'bmp'],
    document: ['docx', 'ppt', 'xlsx', 'pdf', 'txt'],
    sound: ['mp3', 'wav', 'ogg'],
    video: ['mp4', 'mov', 'mkv'],
    unknown: ['file'],
  }

  const getFileType = (fileName: string) => {
    if (fileName.includes('.')) {
      const extension = fileName.split('.').pop();
      if (extensions.image.includes(extension!)) return 'image';
      if (extensions.document.includes(extension!)) return 'document';
      if (extensions.sound.includes(extension!)) return 'sound';
      if (extensions.video.includes(extension!)) return 'video';
    }
    return 'unknown';
  };
  return (
    <>
      <MainContent>
        {fileNames.map( (fileName, index) => <p key={index}><i className={icons[getFileType(fileName)]}></i> {fileName} Type:{getFileType(fileName)}</p> )}
      </MainContent>
      <RightSection>
        <h1>Image Info</h1>
      </RightSection>
    </>
  );
}
