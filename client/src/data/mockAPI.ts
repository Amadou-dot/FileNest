export const fetchFiles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'sunset.jpg', url: 'https://picsum.photos/150?random=1', type: 'image' },
        { name: 'mountain_view.png', url: 'https://picsum.photos/150?random=2', type: 'image' },
        { name: 'flower_garden.jpeg', url: 'https://picsum.photos/150?random=3', type: 'image' },
        { name: 'beach_vacation.gif', url: 'https://picsum.photos/150?random=4', type: 'image' },
        { name: 'city_skyline.bmp', url: 'https://picsum.photos/150?random=5', type: 'image' },
        { name: 'forest_path.jpg', url: 'https://picsum.photos/150?random=6', type: 'image' },
        { name: 'portrait_photo.png', url: 'https://picsum.photos/150?random=7', type: 'image' },
        { name: 'wildlife_capture.jpg', url: 'https://picsum.photos/150?random=8', type: 'image' },
        { name: 'abstract_art.png', url: 'https://picsum.photos/150?random=9', type: 'image' },
        { name: 'family_pic.jpg', url: 'https://picsum.photos/150?random=10', type: 'image' },
        // Documents
        { name: 'report.docx', url: 'https://via.placeholder.com/150?text=report.docx', type: 'document' },
        { name: 'presentation.ppt', url: 'https://via.placeholder.com/150?text=presentation.ppt', type: 'document' },
        { name: 'budget.xlsx', url: 'https://via.placeholder.com/150?text=budget.xlsx', type: 'document' },
        { name: 'resume.pdf', url: 'https://via.placeholder.com/150?text=resume.pdf', type: 'document' },
        { name: 'meeting_minutes.txt', url: 'https://via.placeholder.com/150?text=meeting_minutes.txt', type: 'document' },
        { name: 'project_plan.doc', url: 'https://via.placeholder.com/150?text=project_plan.doc', type: 'document' },
        { name: 'research_paper.pdf', url: 'https://via.placeholder.com/150?text=research_paper.pdf', type: 'document' },
        { name: 'proposal.docx', url: 'https://via.placeholder.com/150?text=proposal.docx', type: 'document' },
        { name: 'user_manual.pdf', url: 'https://via.placeholder.com/150?text=user_manual.pdf', type: 'document' },
        { name: 'invoice.xlsx', url: 'https://via.placeholder.com/150?text=invoice.xlsx', type: 'document' },
        // Sounds
        { name: 'ocean_waves.mp3', url: 'https://via.placeholder.com/150?text=ocean_waves.mp3', type: 'audio' },
        { name: 'birdsong.wav', url: 'https://via.placeholder.com/150?text=birdsong.wav', type: 'audio' },
        { name: 'rainfall.ogg', url: 'https://via.placeholder.com/150?text=rainfall.ogg', type: 'audio' },
        { name: 'piano_music.mp3', url: 'https://via.placeholder.com/150?text=piano_music.mp3', type: 'audio' },
        { name: 'thunderstorm.wav', url: 'https://via.placeholder.com/150?text=thunderstorm.wav', type: 'audio' },
        { name: 'guitar_solo.mp3', url: 'https://via.placeholder.com/150?text=guitar_solo.mp3', type: 'audio' },
        { name: 'wind_chimes.ogg', url: 'https://via.placeholder.com/150?text=wind_chimes.ogg', type: 'audio' },
        { name: 'drum_beat.wav', url: 'https://via.placeholder.com/150?text=drum_beat.wav', type: 'audio' },
        { name: 'ambient_noise.mp3', url: 'https://via.placeholder.com/150?text=ambient_noise.mp3', type: 'audio' },
        { name: 'fire_crackling.wav', url: 'https://via.placeholder.com/150?text=fire_crackling.wav', type: 'audio' },
        // Videos
        { name: 'travel_vlog.mp4', url: 'https://via.placeholder.com/150?text=travel_vlog.mp4', type: 'video' },
        { name: 'tutorial_video.mov', url: 'https://via.placeholder.com/150?text=tutorial_video.mov', type: 'video' },
        { name: 'funny_clip.mp4', url: 'https://via.placeholder.com/150?text=funny_clip.mp4', type: 'video' },
        { name: 'music_video.mkv', url: 'https://via.placeholder.com/150?text=music_video.mkv', type: 'video' },
        { name: 'nature_documentary.mp4', url: 'https://via.placeholder.com/150?text=nature_documentary.mp4', type: 'video' },
        { name: 'interview_video.mov', url: 'https://via.placeholder.com/150?text=interview_video.mov', type: 'video' },
        { name: 'animation_short.mp4', url: 'https://via.placeholder.com/150?text=animation_short.mp4', type: 'video' },
        { name: 'sports_highlight.mp4', url: 'https://via.placeholder.com/150?text=sports_highlight.mp4', type: 'video' },
        { name: 'vlog_series.mp4', url: 'https://via.placeholder.com/150?text=vlog_series.mp4', type: 'video' },
        { name: 'movie_trailer.mkv', url: 'https://via.placeholder.com/150?text=movie_trailer.mkv', type: 'video' },
      ]);
    }, 1000);
  });
};