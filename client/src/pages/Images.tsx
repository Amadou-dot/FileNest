import { files } from "../data/Files";
import FileList from "../components/FileList";

export default function Images() {
  const imageFilter = (file: { name: string }) =>
    file.name.endsWith('.jpg') ||
    file.name.endsWith('.png') ||
    file.name.endsWith('.jpeg') ||
    file.name.endsWith('.gif') ||
    file.name.endsWith('.bmp');

  return <FileList files={files} filter={imageFilter} />;
}