import { useState } from "react";

type VideoProps = {
  vid: string;
  img: string;
};

const CourseVideos = ({ vid, img }: VideoProps) => {
  const [change, setChange] = useState<boolean>(false);
  return (
    <>
      {
        change ?<video src={vid} controls muted autoPlay onMouseLeave={()=>{setChange(false)}}></video> :  <img className="coverImage" src={img} onMouseEnter={()=>{setChange(true)}}></img>
      }
    </>
  );
};

export default CourseVideos;

