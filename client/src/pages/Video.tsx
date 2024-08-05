import FileList from "../components/FileList";
import { useFiles } from "../context/useFiles";
export default function Video() {
  const videoFiles = useFiles().videoFiles;
  return <FileList files={videoFiles} />;
}