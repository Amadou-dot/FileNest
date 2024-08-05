import { useContext } from "react";
import { FilesContext } from "./FilesContext";

export const useFiles = () => useContext(FilesContext);
