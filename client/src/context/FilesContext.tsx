import React, { createContext, useEffect, useState } from 'react';
import { fetchFiles } from '../data/mockAPI';
interface FileItem {
  name: string;
  url: string;
  type: string;
}
const filterImages = (file: FileItem) => file.type === 'image';
const filterVideos = (file: FileItem) => file.type === 'video';
const filterDocuments = (file: FileItem) => file.type === 'document';
const filterSounds = (file: FileItem) => file.type === 'audio';

export const FilesContext = createContext({
  allFiles: [],
  imageFiles: [],
  documentFiles: [],
  videoFiles: [],
  soundFiles: [],
});

export const FilesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles().then((data: any) => setFiles(data));
  }, []);

  const filteredFiles = {
    allFiles: files,
    imageFiles: files.filter(filterImages),
    documentFiles: files.filter(filterDocuments),
    videoFiles: files.filter(filterVideos),
    soundFiles: files.filter(filterSounds),
  };

  return (
    <FilesContext.Provider value={filteredFiles}>
      {children}
    </FilesContext.Provider>
  );
};
