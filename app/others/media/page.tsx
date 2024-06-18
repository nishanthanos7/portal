import Newsbody from "@/components/Newsbody";
import React from "react";
import { Roboto } from "next/font/google";

const Media = () => {
  const newsTitle: string = "this is title from prop ";
  const newsBody: string = `this is news body.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim quae officiis vero minus
  consectetur omnis adipisci, ut repudiandae culpa maiores, eos quibusdam voluptatum autem. Expedita corrupti eaque sed, reprehenderit, tenetur voluptates suscipit ipsam beatae perferendis nemo 
  illo necessitatibus modi vero dicta nostrum cupiditate eum optio ullam eveniet qui ipsa!`;
  return (
    <>
      <Newsbody
        title={newsTitle}
        body={newsBody}
        image={
          "https://cdn.pixabay.com/photo/2023/04/28/10/03/chapel-7956274_960_720.jpg"
        }
      />
    </>
  );
};

export default Media;
