import FileList from "../components/FileList";
import { files } from "../data/Files";
export default function Documents() {
  const documentFilter = (file: { name: string }) => file.name.endsWith('.docx') || file.name.endsWith('.ppt') || file.name.endsWith('.xlsx') || file.name.endsWith('.pdf') || file.name.endsWith('.txt');
  return <FileList files={files} filter={documentFilter} />;

}