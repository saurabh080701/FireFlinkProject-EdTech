import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

export type Exam = {
  key:number,
  exam:{
    id: number;
    exam_category: string;
    types_of_exams?: string[] | undefined;
    image: string;
  };
  divStyle: React.CSSProperties;
};

const SingleExamCat = ( { exam , divStyle}: Exam) => {
  console.log(exam);
  
  return (
    <div className='singleExamDetailCard'>
        <aside className='examCard-topic'>
            <h1>
              <strong>{exam.exam_category}</strong>
            </h1>
              
              {exam.types_of_exams && (
                <div className='examtype'>
                  {exam.types_of_exams.map((examType: string, index: number) => (
                <div key={index}>{examType}</div>
                ))}
                </div>
            )}

          <div className='exploreLink'>
              <Link  to={`/courseDetails/${exam.id}`} state= {{id: exam.id}}>Explore Category <GoArrowRight className='examExploreArrow'/> </Link>
              
          </div>
        </aside>

        <picture className='examCardImg' style={divStyle}>
              <img src={`../../../assets/ExamCategoriesImages/${exam.image}`} alt={exam.exam_category} />
        </picture>

    </div>
  );
};

export default SingleExamCat;