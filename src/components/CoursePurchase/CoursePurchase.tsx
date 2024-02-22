
import Video from "./CourseVideos";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordion,AccordionDetails,AccordionSummary } from "@mui/material";
type DataVideo = {
  datas: {
    id: number;
    page_Title: string;
    description: string;
    micro_videos: {
      id: number;
      course_Name: string;
      special_Discount_Price: number;
      actual_Price: number;
      video_link: string;
      img_link: string;
      Batch_details: {
        qns: string;
        ans: string;
      }[];
    }[];
  };
};

const CoursePurchase = ({ datas }: DataVideo) => {
 return (
    <div className="course_webpage">
        <div className="nav_bar">
          <div className="nav_bar_container">
            <h1>{datas.page_Title}</h1>
            <br />
            <h6>{datas.description}</h6>
          </div>
      </div>
      <div className="parent_container">
      {datas.micro_videos.map((data, index) => {
        return (
          <>
          <Accordion id="accordion" key={index}>
              <AccordionSummary>
            <div className="course_description_box">
              
              <aside className="video_part">
                <Video vid={data.video_link} img={data.img_link}/>
              </aside>
              <aside className="content_part">
                 <h1>{data.course_Name}</h1>
                 <br /><br />
                 <h3>special discount price</h3>
                 <div className="discount_details">
                 <h2>  &#8377;{data.special_Discount_Price}</h2> &nbsp;&nbsp;
                  <h3><del>
                    <sub>{data.actual_Price}</sub>
                  </del></h3>
                  <div className="discount_percentage">{Math.ceil((data.special_Discount_Price/data.actual_Price)*100)} %</div>
                 </div>
                 <br />
                 <button className="explore_btn">Explore</button>
              </aside>
            </div>
             </AccordionSummary>
              <AccordionDetails id="AccordionDetails" key={index}>
                {
                  data.Batch_details.map((batch_data,index)=>{
                    return(
                      <>
                      <div className="parent_batch" key={index}>
                         <div className="qns "><h2>{batch_data.qns}</h2></div>
                         <div className="ans"><h3>{batch_data.ans}</h3></div>
                      </div>
                      </>
                    )
                  
                  })
                }
              </AccordionDetails>
              </Accordion>
          </>
        );
      })}
      </div>
    </div>
  );
};

export default CoursePurchase;

