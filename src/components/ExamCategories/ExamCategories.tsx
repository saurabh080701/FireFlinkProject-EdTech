import React from 'react';
import EXAM from '../../../backend/ExamCategories.json';
import SingleExamCat from './SingleExamCat';

const ExamCategories = () => {

  return (
    <section className='examCategories'>
      <header className='examHeading'>
          <h1>Exam Categories</h1>
          <p>PW is preparing students for 17 exam categories. Scroll down to find the one you are preparing for</p>
      </header>

      <main className='examsNamesBlocks'>
            {EXAM.map((exam , index) => (
                <SingleExamCat key={index} exam={exam} />
              ))}
      </main>
    </section>
  );
};

export default ExamCategories;