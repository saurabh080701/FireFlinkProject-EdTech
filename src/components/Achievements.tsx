import React from 'react';
import ac1 from '../../assets/AchivementsImages/ach (1).webp';
import ac2 from '../../assets/AchivementsImages/ach (2).webp';
import ac3 from '../../assets/AchivementsImages/ach (3).webp';
import ac4 from '../../assets/AchivementsImages/ach (4).webp';

const Achievements = () => {
  return (
    <section className='achieveContainer'>
        <main className='achieveHead'>
            <h1>A Platform Trusted by Students Worldwide</h1>
            <p>Don't Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!</p>
        </main>

        <article className='achieveMain'>
            <div>
              <h1>15 Million+</h1>
              <p>Happy Students</p>
              <img src={ac4} alt="" />
            </div>
            <div>
              <h1>24000+</h1>
              <p>Mock Tests</p>
              <img src={ac3} alt="" />
            </div>
            <div>
              <h1>14000+</h1>
              <p>Video Lectures</p>
              <img src={ac1} alt="" />
            </div>
            <div>
              <h1>80000+</h1>
              <p>Practice Papers</p>
              <img src={ac2} alt="" />
            </div>
        </article>

        <div className='achive-btn'>
            <button>Get Started</button>
        </div>
    </section>
  )
}

export default Achievements