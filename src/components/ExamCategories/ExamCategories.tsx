
import EXAM from '../../../backend/ExamCategories.json';
import SingleExamCat from './SingleExamCat';

const colors: string[] = ['#fceeda', '#fee5e5', '#d6f3fa', '#e9e2ff', '#defcd1'];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const ExamCategories = () => {

  return (
    <section className='examCategories'>
      <header className='examHeading'>
          <h1>Exam Categories</h1>
          <p>PW is preparing students for 17 exam categories. Scroll down to find the one you are preparing for</p>
      </header>

      <main className='examsNamesBlocks'>
            {EXAM.map((exam , index) => (
                <SingleExamCat key={index} exam={exam} divStyle={{ backgroundColor: getRandomColor() }}/>
              ))}
      </main>
    </section>
  );
};

export default ExamCategories;