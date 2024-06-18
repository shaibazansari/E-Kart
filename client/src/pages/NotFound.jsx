import React from "react";
import NotFoundImg from "../assets/images/not-found.jpg"

const NotFound = () => {
  return (
    <div className="w-full flex flex-grow items-center justify-center">
      <img
        src={NotFoundImg}
        alt="Not found image"
      />
    </div>
  );
};

export default NotFound;
