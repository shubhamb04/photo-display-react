import React, { useContext } from "react";
import { Context } from "../context/Context";
import Image from "../components/Image";
import getClass from "../utils/getClass";

function Photos() {
  const { allPhotos } = useContext(Context);
  return (
    <main className="photos">
      {allPhotos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)} />
      ))}
    </main>
  );
}

export default Photos;
