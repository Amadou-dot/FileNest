import { useState } from "react";
import FileInfo from "../components/FileInfo/FileInfo";
import FileThumbnail from "../components/FileThumbnail/FileThumbnail";
import fileThumbnail from '../components/FileThumbnail/FileThumbnail.module.css';
import MainContent from "../components/Main/MainContent";
import styles from '../pages/Files.module.css';

interface FileListProps {
  files: { name: string; url: string }[];
}

export default function FileList({ files }: FileListProps) {
  const [activeFile, setActiveFile] = useState<string | null>(null);

  const handleFileClick = (event: React.MouseEvent<HTMLDivElement>) => {
	const clickedFile = (event.target as HTMLElement).closest(
    `.${fileThumbnail.fileThumbnail}`
	);
	const fileName = clickedFile?.textContent;
	if (!fileName) return;
	setActiveFile(prev => (prev === fileName ? null : fileName));
  };


  return (
	<>
        <MainContent>
		<div className={styles.files} onClick={handleFileClick}>
            {files.map((file, index) => (
			<FileThumbnail
                key={index}
                fileName={file.name}
                imageUrl={file.url}
                isActive={file.name === activeFile}
			/>
            ))}
		</div>
        </MainContent>
        {activeFile && <FileInfo activeFile={activeFile} />}
	</>
  );
}