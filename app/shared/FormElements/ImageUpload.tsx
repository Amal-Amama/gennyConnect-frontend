import React, { useEffect, useRef, useState } from "react";
import "./ImageUpload.css";

const FileUpload = ({ id, onInput, errorText, center }: any) => {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const filePickerRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.result) {
        setPreviewUrl(fileReader.result as string);
      }
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  const pickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    onInput(id, pickedFile, fileIsValid);
  };
  const pickFileHandler = () => {
    filePickerRef.current?.click();
  };
  return (
    <div className="form_control">
      <input
        id={id}
        ref={filePickerRef}
        type="file"
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg,.pdf"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p className="text-gray-500">Please pick a logo.</p>}
        </div>
        <button type="button" onClick={pickFileHandler} className="button">
          Logo
        </button>
        {!isValid && <p>{errorText}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
