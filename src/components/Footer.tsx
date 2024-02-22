

import logo from '../../assets/pwLogo.png';
import googlePlay from '../../assets/googleplay.webp';
import appleStore from '../../assets/apple-store.webp';
import fb from '../../assets/fb.webp';
import insta from '../../assets/insta.webp';
import yt from '../../assets/youtube.webp';
import li from '../../assets/link.webp';
import tw from '../../assets/tw.webp';
import tel from '../../assets/tel.webp';

const Footer = () => {
  return (
    <section className='footerSection'>
        <aside className='footerConnection'>
          <img src={logo} alt="" />
          <h1>Physics Wallah</h1>
          <p>We understand that every student has different needs and capabilities, 
              which is why we create such a wonderful and unique curriculum that is the best fit for every student.</p>
          <a href="https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala">
            <img src={googlePlay} alt="" className='googleplay'/>
          </a>
          <a href="https://apps.apple.com/in/app/physics-wallah/id1641443555">
            <img src={appleStore} alt="" className='applestore'/>
          </a>
          <h3>Let’s get social :</h3>

          <div className='socialMedia'>
            <img src={fb} alt="" /><img src={insta} alt="" /><img src={yt} alt="" /><img src={li} alt="" /><img src={tw} alt="" /><img src={tel} alt="" />
          </div>
        </aside>
        
        <article className='about'>
                  
                <ul>
                  <h2 className="list-heading">Company</h2>
                  <li className="list-item">About Us</li>
                  <li className="list-item">Contact Us</li>
                  <li className="list-item">Careers</li>
                  <li className="list-item">Updates</li>
                  <li className="list-item">Blogs</li>
                  <li className="list-item">Our Centres</li>
                </ul>

                
                <ul>
                <h2 className="list-heading">Our Centres</h2>
                  <li className="list-item">New Delhi</li>
                  <li className="list-item">Patna</li>
                  <li className="list-item">Kota</li>
                  <li className="list-item">Noida</li>
                  <li className="list-item">Dhanbad</li>
                  <li className="list-item">Varanasi</li>
                  <li className="list-item">View All</li>
                </ul>

                
                <ul>
                <h2 className="list-heading">Popular Exams</h2>
                  <li className="list-item">IIT JEE</li>
                  <li className="list-item">NEET</li>
                  <li className="list-item">GATE</li>
                  <li className="list-item">NDA</li>
                  <li className="list-item">UPSC</li>
                  <li className="list-item">School Prep</li>
                </ul>

                
                <ul>
                <h2 className="list-heading">Connect With Us</h2>
                  <li className="list-item">Email Us</li>
                  <li className="list-item">Talk to A Counselor</li>
                </ul>

                
                <ul>
                <h2 className="list-heading">Quick Links</h2>
                  <li className="list-item">PW Prerna</li>
                  <li className="list-item">PW SIP</li>
                  <li className="list-item">PW Gurukulam</li>
                </ul>

                
                <ul>
                <h2 className="list-heading">Our Products</h2>
                  <li className="list-item">PW App Learning</li>
                </ul>


                        </article>
                    </section>
  )
}

export default Footer;