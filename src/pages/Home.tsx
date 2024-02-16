
import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import ExamCategories from '../components/ExamCategories/ExamCategories';

const Home = () => {
  return (
    <>
      <header id='headerContent'>
          <NavigationBar/>
      </header>
      <main id='mainContent'>
            <Banner/>
            <ExamCategories/>
      </main>
        
      
    </>
  )
}

export default Home;
