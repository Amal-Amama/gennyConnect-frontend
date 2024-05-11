// import React, { useEffect, useRef, useState } from "react";
// import "./PDFUpload.css";

// const PDFUpload = ({ id, onInput, errorText }: any) => {
//   const [files, setFiles] = useState<File[]>([]);
//   const [previewUrls, setPreviewUrls] = useState<string[]>([]);
//   const [isValid, setIsValid] = useState<boolean>(false);
//   const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
//   const filePickerRef = useRef<HTMLInputElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (!files || files.length === 0) {
//       return;
//     }
//     const urls: string[] = [];
//     const promises = files.map((file) => {
//       return new Promise<string>((resolve) => {
//         const fileReader = new FileReader();
//         fileReader.onload = () => {
//           if (fileReader.result) {
//             urls.push(fileReader.result as string);
//             resolve(fileReader.result as string);
//           }
//         };
//         fileReader.readAsDataURL(file);
//       });
//     });

//     Promise.all(promises).then(() => {
//       setPreviewUrls(urls);
//     });
//   }, [files]);

//   const pickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     let pickedFiles: File[] = [];
//     let fileIsValid = isValid;

//     if (event.target.files && event.target.files.length > 0) {
//       pickedFiles = Array.from(event.target.files);

//       // Si l'id est "certifications", autoriser la sélection de plusieurs fichiers
//       if (id === "certifications") {
//         setFiles(pickedFiles);
//         setSelectedFileNames(pickedFiles.map((file) => file.name));
//         setIsValid(true);
//         fileIsValid = true;
//       } else if (id === "diplome") {
//         // Si l'id est "diplome", vérifier qu'un seul fichier a été sélectionné
//         if (pickedFiles.length === 1) {
//           setFiles(pickedFiles);
//           setSelectedFileNames(pickedFiles.map((file) => file.name));
//           setIsValid(true);
//           fileIsValid = true;
//         } else {
//           setIsValid(false);
//           fileIsValid = false;
//         }
//       }
//     } else {
//       setIsValid(false);
//       fileIsValid = false;
//     }

//     onInput(id, pickedFiles, fileIsValid);
//   };

//   const pickFileHandler = () => {
//     filePickerRef.current?.click();
//   };

//   return (
//     <div className="PDF-upload form-control">
//       <label htmlFor={id} className=" text-gray-700 font-sans text-sm">
//         {id === "diplome" ? "diplome" : "Certifications"}
//       </label>
//       <div className="flex flex-row justify-center items-center w-full">
//         <button
//           type="button"
//           onClick={pickFileHandler}
//           className="PDF-upload__button "
//         >
//           {id === "diplome" ? "  Upload one PDF File" : "Upload PDF Files"}
//         </button>

//         <input
//           type="text"
//           ref={inputRef}
//           readOnly
//           value={selectedFileNames.join(", ")}
//           placeholder="No files selected"
//           className=" h-[3.2rem] mt-4 "
//         />
//       </div>
//       <input
//         id={id}
//         ref={filePickerRef}
//         type="file"
//         style={{ display: "none" }}
//         accept=".pdf"
//         multiple
//         onChange={pickedHandler}
//       />
//       {!isValid && <p>{errorText}</p>}
//     </div>
//   );
// };

// export default PDFUpload;
import React, { ChangeEvent, useRef, useState } from "react";
import "./PDFUpload.css";

// Définition des types des props
interface PDFUploadProps {
  id: string;
  onInput: (id: string, files: File[], isValid: boolean) => void;
  errorText: string;
  center?: boolean;
}

// Définition du composant PDFUpload
const PDFUpload: React.FC<PDFUploadProps> = ({ id, onInput, errorText }) => {
  // États du composant
  const [files, setFiles] = useState<File[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);
  const filePickerRef = useRef<HTMLInputElement>(null);

  // Gestionnaire d'événement pour ouvrir le sélecteur de fichier
  const pickFileHandler = () => {
    filePickerRef.current?.click();
  };

  // Gestionnaire d'événement pour la sélection de fichiers
  const pickedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const pickedFiles = event.target.files;
    if (!pickedFiles || pickedFiles.length === 0) {
      setIsValid(false);
      onInput(id, [], false);
      return;
    }

    const selectedFiles = Array.from(pickedFiles);
    let fileIsValid = false;

    if (
      id === "certifications" ||
      (id === "diplome" && selectedFiles.length === 1)
    ) {
      fileIsValid = true;
      setIsValid(true);
      onInput(id, selectedFiles, true);
    } else {
      setIsValid(false);
      onInput(id, [], false);
    }

    setFiles(selectedFiles);
  };

  // Rendu du composant
  return (
    <div className="PDF-upload form-control">
      {/* Libellé du composant */}
      <label htmlFor={id} className="text-gray-700 font-sans text-sm">
        {id === "diplome" ? "diplome" : "Certifications"}
      </label>
      {/* Bouton de sélection de fichier et champ de texte */}
      <div className="flex flex-row justify-center items-center w-full">
        <button
          type="button"
          onClick={pickFileHandler}
          className="PDF-upload__button"
        >
          {id === "diplome" ? "  Upload one PDF File" : "Upload PDF Files"}
        </button>

        <input
          type="text"
          readOnly
          value={files.map((file) => file.name).join(", ")}
          placeholder="No files selected"
          className="h-[3.2rem] mt-4"
        />
      </div>
      {/* Input de type file (invisible) */}
      <input
        id={id}
        ref={filePickerRef}
        type="file"
        style={{ display: "none" }}
        accept=".pdf"
        multiple
        onChange={pickedHandler}
      />
      {/* Affichage du texte d'erreur */}
      {!isValid && <p className=" text-red-600 font-sans">{errorText}</p>}
    </div>
  );
};

export default PDFUpload;
