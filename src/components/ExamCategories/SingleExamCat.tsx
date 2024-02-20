import React from 'react'
import { GoArrowRight } from "react-icons/go";

type exam = {
  key:number,
  exam:{
    exam_category: string;
    types_of_exams: string[];
    image: string;
  };
  divStyle: React.CSSProperties;
};

const SingleExamCat = ( { exam , divStyle}) => {
  console.log(exam);
  
  return (
    <div className='singleExamDetailCard'>
        <aside className='examCard-topic'>
            <h1>
              <strong>{exam.exam_category}</strong>
            </h1>
              
              {exam.types_of_exams && (
                <div className='examtype'>
                  {exam.types_of_exams.map((examType, index) => (
                <div key={index} >{examType}</div>
                ))}
                </div>
            )}

          <div className='exploreLink'>
              <a href="">Explore Category <GoArrowRight className='examExploreArrow'/> </a>
              
          </div>
        </aside>

        <picture className='examCardImg' style={divStyle}>
              <img src={`../../../assets/ExamCategoriesImages/${exam.image}`} alt={exam.exam_category} />
        </picture>

    </div>
  );
};

export default SingleExamCat;