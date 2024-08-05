import FileList from "../components/FileList";
import { files } from "../data/Files";
export default function Sound() {
  const soundFilter = (file: { name: string }) => file.name.endsWith('.mp3') || file.name.endsWith('.wav') || file.name.endsWith('.flac') || file.name.endsWith('.aac') || file.name.endsWith('.m4a');
  return <FileList files={files} filter={soundFilter} />;
}