import FileList from "../components/FileList";
import { useFiles } from "../context/useFiles";
export default function Sound() {
  const soundFiles = useFiles().soundFiles;
  return <FileList files={soundFiles} />;
}