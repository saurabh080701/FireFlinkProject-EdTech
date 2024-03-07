import { useParams } from 'react-router-dom';
import data from '../../backend/courseDetails.json'
import CoursePurchase from '../components/CoursePurchase/CoursePurchase';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';


const CourseDetails = () => {
  const { id } = useParams<{ id: string | undefined}>();
  const courseId = id ? parseInt(id) : undefined;
  console.log(id)

  return (
    <div className="app">
      <NavigationBar />
      <CoursePurchase datas={data.courses[`${courseId-1}`] }/>
      <Footer />
    </div>
  );
};

export default CourseDetails;







