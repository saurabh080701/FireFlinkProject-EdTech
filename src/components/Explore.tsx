import React from 'react'
import pwV from '../../assets/pwV.mp4'
import c1 from '../../assets/CitesImg/c1 (1).webp'
import c2 from '../../assets/CitesImg/c1 (2).webp'
import c3 from '../../assets/CitesImg/c1 (3).webp'
import c4 from '../../assets/CitesImg/c1 (4).webp'
import c5 from '../../assets/CitesImg/c1 (5).webp'
import c6 from '../../assets/CitesImg/c1 (6).webp'
import c7 from '../../assets/CitesImg/c1 (7).webp'
import c8 from '../../assets/CitesImg/c1 (8).webp'

const Explore = () => {
  return (
    <section className='exploreSection'>
        <div className='backgroundvideo'>
          <h1>Explore Tech-Enabled Offline Vidyapeeth Centres</h1>
          <p>Creating new benchmarks in learning experiences</p>
          <video autoPlay loop muted preload="auto">
            <source src={pwV} type="video/mp4" />
                  Your browser does not support the video tag.
          </video>
        </div>

        <article className='citiesBlock'>
         
          <div className='cityHeading'>
            <h1>Find Vidyapeeth Centre in your city</h1>
            <p>Available in <span>105</span> cities </p>
          </div>
           
            <div className='cityImages'>
                <div>
                    <img src={c1} alt="" />
                     
                      <h1>Kota</h1>
                </div>
                <div>
                      <img src={c7} alt="" />
                      <h1>Bareilly</h1>
                </div>
                <div>
                      <img src={c5} alt="" />
                      <h1>Patna</h1>
                </div>
                <div>
                      <img src={c2} alt="" />
                      <h1>Noida</h1>
                </div>
                <div>
                      <img src={c6} alt="" />
                      <h1>New Delhi</h1>
                </div>
                <div>
                      <img src={c8} alt="" />
                      <h1>Kolkata</h1>
                </div>
                <div>
                      <img src={c4} alt="" />
                      <h1>Ahmedabad</h1>
                </div>
                <div>
                      <img src={c3} alt="" />
                      <h1>Jaipur</h1>
                </div>
            </div>

          <div className='citi-btn'>
              <button>View More</button>
          </div>
        </article>
    </section>
  )
}

export default Explore;