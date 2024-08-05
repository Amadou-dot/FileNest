import { files } from "../data/Files";
import FileList from "../components/FileList";

export default function Files() {
  return <FileList files={files} />;
}