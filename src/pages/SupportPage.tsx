
import { Navbar } from '../components/SupportPage/Navbar'
import { NeedHelp } from '../components/SupportPage/NeedHelp'
import SearchBar from '../components/SupportPage/SearchBar'
import HelpCards from '../components/SupportPage/HelpCards'
import FaqAccor from '../components/SupportPage/FaqAccor'
import Footer from '../components/Footer'
const SupportPage = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <NeedHelp />
      <HelpCards />
      <FaqAccor />
      <Footer />
    </div>
  )
}

export default SupportPage
