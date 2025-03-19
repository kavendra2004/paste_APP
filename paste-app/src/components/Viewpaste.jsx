import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Viewpaste = () => {
  const {id} = useParams()

  const allPaste= useSelector((state) => state.paste.pastes);
  
  
  const paste = allPaste.find((item) => item.pasteId === id); 
  
  console.log(paste);

  return (

    

    <div className="mt-8 flex flex-col gap-8">
      <div className="flex  gap-4 justify-between">
        <input
          className="bg-neutral-900 w-full rounded-2xl px-4 py-2"
          placeholder="Enter title here"
          disabled={true}
          value={paste.title}
          type="text"
        />
      </div>
      <div>
        <textarea
        className="bg-neutral-900 p-4 rounded-2xl min-w-[500px]"
        disabled={true}
        value={paste.content}
        placeholder="Enter content here..." 
        rows="20"></textarea>
      </div>
    </div>
  );
};

export default Viewpaste;
