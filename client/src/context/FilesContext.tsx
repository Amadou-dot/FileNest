import React, { createContext } from 'react';
import { files } from '../data/Files';

const filterImages = (file: { name: string }) =>
  file.name.endsWith('.jpg') ||
  file.name.endsWith('.png') ||
  file.name.endsWith('.jpeg') ||
  file.name.endsWith('.gif') ||
  file.name.endsWith('.bmp');

const filterDocuments = (file: { name: string }) =>
  file.name.endsWith('.pdf') ||
  file.name.endsWith('.doc') ||
  file.name.endsWith('.docx') ||
  file.name.endsWith('.txt');

const filterVideos = (file: { name: string }) => 
  file.name.endsWith('.mp4') ||
  file.name.endsWith('.avi') ||
  file.name.endsWith('.mov') ||
  file.name.endsWith('.mkv') ||
  file.name.endsWith('.wmv');

const filterSounds = (file: { name: string }) =>
  file.name.endsWith('.mp3') ||
  file.name.endsWith('.wav') ||
  file.name.endsWith('.flac') ||
  file.name.endsWith('.aac') ||
  file.name.endsWith('.m4a');

const filteredFiles = {
  allFiles: files,
  imageFiles: files.filter(filterImages),
  documentFiles: files.filter(filterDocuments),
  videoFiles: files.filter(filterVideos),
  soundFiles: files.filter(filterSounds),
};

export const FilesContext = createContext(filteredFiles);

export const FilesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FilesContext.Provider value={filteredFiles}>
      {children}
    </FilesContext.Provider>
  );
};
