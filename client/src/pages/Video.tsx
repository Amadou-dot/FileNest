import FileList from "../components/FileList";
import { files } from "../data/Files";
export default function Video() {
  const videoFilter = (file: { name: string }) => file.name.endsWith('.mp4') || file.name.endsWith('.avi') || file.name.endsWith('.mov') || file.name.endsWith('.mkv') || file.name.endsWith('.wmv');
  return <FileList files={files} filter={videoFilter} />;
}