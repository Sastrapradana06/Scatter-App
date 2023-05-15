import React, { useRef } from 'react';
import { useDataUserContext } from "../Context/DataUser";
// import { FcCameraAddon } from "react-icons/fc";
import { BsCamera } from "react-icons/bs";

export default function InputProfil() {
  const [, dispatch] = useDataUserContext();


    const fileInputRef = useRef(null);

    const handleClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (e) => {
      const file = URL.createObjectURL(e.target.files[0]);
      dispatch({ type: 'EditAvatar', payload: file })
    }
  
    return (
      <div className="file-upload border w-max m-auto cursor-pointer p-2 rounded-full">
        <label htmlFor="file-input" className="file-input-label cursor-pointer" onClick={handleClick}>
          <BsCamera size={30}/>
        </label>
        <input
          type="file"
          id="file-input"
          className="file-input hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    );
}