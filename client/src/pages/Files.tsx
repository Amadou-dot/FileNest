import { useFiles } from "../context/useFiles";
import FileList from "../components/FileList";
export default function Files() {
  const files = useFiles().allFiles;
  return <FileList files={files} />;
}