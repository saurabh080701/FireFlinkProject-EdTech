import React from 'react'

const Achievements = () => {
  return (
    <section className='achieveContainer'>
        <main className='achieveHead'>
            <h1>A Platform Trusted by Students Worldwide</h1>
            <p>Don't Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!</p>
        </main>

        <article className='achieveMain'>
            <div><h1>15 Million+</h1><p>Happy Students</p></div>
            <div><h1>24000+</h1><p>Mock Tests</p></div>
            <div><h1>14000+</h1><p>Video Lectures</p></div>
            <div><h1>80000+</h1><p>Practice Papers</p></div>
        </article>

        <div className='achive-btn'>
            <button>Get Started</button>
        </div>
    </section>
  )
}

export default Achievements