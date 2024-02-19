import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import ExamCategories from '../components/ExamCategories/ExamCategories';
import Explore from '../components/Explore';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <header id='headerContent'>
          <NavigationBar/>
      </header>
      <main id='mainContent'>
            <Banner/>
            <ExamCategories/>
            <Explore/>
            <Achievements/>
      </main>
        
      <footer className='footer'>
        <Footer/>
      </footer>
    </>
  )
}

export default Home;
