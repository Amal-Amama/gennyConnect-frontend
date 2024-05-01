import React, { useEffect, useRef, useState } from "react";
import "./PDFUpload.css";

const PDFUpload = ({ id, onInput, errorText }: any) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!files || files.length === 0) {
      return;
    }
    const urls: string[] = [];
    const promises = files.map((file) => {
      return new Promise<string>((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (fileReader.result) {
            urls.push(fileReader.result as string);
            resolve(fileReader.result as string);
          }
        };
        fileReader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then(() => {
      setPreviewUrls(urls);
    });
  }, [files]);

  const pickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFiles: File[] = [];
    let fileIsValid = isValid;

    if (event.target.files && event.target.files.length > 0) {
      pickedFiles = Array.from(event.target.files);

      // Si l'id est "certifications", autoriser la sélection de plusieurs fichiers
      if (id === "certifications") {
        setFiles(pickedFiles);
        setSelectedFileNames(pickedFiles.map((file) => file.name));
        setIsValid(true);
        fileIsValid = true;
      } else if (id === "diplome") {
        // Si l'id est "diplome", vérifier qu'un seul fichier a été sélectionné
        if (pickedFiles.length === 1) {
          setFiles(pickedFiles);
          setSelectedFileNames(pickedFiles.map((file) => file.name));
          setIsValid(true);
          fileIsValid = true;
        } else {
          setIsValid(false);
          fileIsValid = false;
        }
      }
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    onInput(id, pickedFiles, fileIsValid);
  };

  const pickFileHandler = () => {
    filePickerRef.current?.click();
  };

  return (
    <div className="PDF-upload form-control">
      <label htmlFor={id} className=" text-gray-700 font-sans text-sm">
        {id === "diplome" ? "diplome" : "Certifications"}
      </label>
      <div className="flex flex-row justify-center items-center w-full">
        <button
          type="button"
          onClick={pickFileHandler}
          className="PDF-upload__button "
        >
          {id === "diplome" ? "  Upload one PDF File" : "Upload PDF Files"}
        </button>

        <input
          type="text"
          ref={inputRef}
          readOnly
          value={selectedFileNames.join(", ")}
          placeholder="No files selected"
          className=" h-[3.2rem] mt-4 "
        />
      </div>
      <input
        id={id}
        ref={filePickerRef}
        type="file"
        style={{ display: "none" }}
        accept=".pdf"
        multiple
        onChange={pickedHandler}
      />
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

export default PDFUpload;
