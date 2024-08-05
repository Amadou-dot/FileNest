import FileList from "../components/FileList";
import { useFiles } from "../context/useFiles";
export default function Documents() {
  const documentFiles = useFiles().documentFiles;
  return <FileList files={documentFiles} />;

}