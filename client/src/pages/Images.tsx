import FileList from "../components/FileList";
import { useFiles } from "../context/useFiles";

export default function Images() {
  const imageFiles = useFiles().imageFiles;
  return <FileList files={imageFiles} />;
}