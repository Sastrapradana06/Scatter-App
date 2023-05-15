import React, { useRef } from "react";
import { useDataUserContext } from "../Context/DataUser";
import { BsCamera } from "react-icons/bs";

export default function UploadImage() {
  const [, dispatch] = useDataUserContext();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    dispatch({ type: "GetImageTweet", payload: file });
  };

  return (
    <div className="file-upload border w-max  cursor-pointer p-2 ">
      <label htmlFor="GetStatusTweet" className="file-input-label cursor-pointer" onClick={handleClick}>
        <BsCamera size={30} />
      </label>
      <input type="file" id="file-input" className="file-input hidden" ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
}
