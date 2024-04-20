import FileThumbnail from '../components/FileThumbnail/FileThumbnail';
import MainContent from '../components/Main/MainContent';
import styles from './Files.module.css';
import fileThumbnail from '../components/FileThumbnail/FileThumbnail.module.css';
import { useState } from 'react';
import FileInfo from '../components/FileInfo/FileInfo';
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

/**
 * File page component
 * @returns Main content with file thumbnails and right section with file details when a file is clicked
 */
export default function Files() {
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const handleFileClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedFile = (event.target as HTMLElement).closest(
      `.${fileThumbnail.fileThumbnail}`
    );
    const fileName = clickedFile?.textContent;
    if (!fileName) return;
    setActiveFile(prev => (prev === fileName ? null : fileName));
  };

  return (
    <>
      <MainContent>
        <div className={styles.files} onClick={handleFileClick}>
          {fileNames.map((fileName, index) => (
            <FileThumbnail
              key={index}
              fileName={fileName}
              isActive={fileName === activeFile}
            />
          ))}
        </div>
      </MainContent>
      {activeFile && <FileInfo activeFile={activeFile} />}
    </>
  );
}
