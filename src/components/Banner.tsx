import React from 'react';
import bannerImg from '../../assets/bannerimg.png'
import bancon1 from '../../assets/bancon1.webp'
import bancon2 from '../../assets/bancon2.webp'
import bancon3 from '../../assets/bancon3.webp'
import bancon4 from '../../assets/bancon4.webp'

const Banner = () => {
  return (
    <section className='banner'>
        <main className='bannerContent'>
            <aside className='bannerHedings'>
                <h1>Bharat’s <span>Biggest & Most Trusted</span> Educational Platform</h1>
                <p>Unlock your potential by signing up with Physics Wallah-The most affordable learning solution</p>
                <button>Get Started</button>
            </aside>

            <figure className='bannerImage'>
                <img src={bannerImg} alt="" />
            </figure>
        </main>

        <article className='bannerDetails'>
            <div>
                <img src={bancon1} alt="" />
                <h2>Daily Live</h2>
                <p>Interactive classes</p>
            </div>
            <div>
                <img src={bancon2} alt="" />
                <h2>10 Million +</h2>
                <p>Tests & sample papers </p>
            </div>
            <div>
                <img src={bancon3} alt="" />
                <h2>24 x 7</h2>
                <p>Doubt solving sessions</p>
            </div>
            <div>
                <img src={bancon4} alt="" />
                <h2>100 +</h2>
                <p>Offline centres</p>
            </div>
        </article>
    </section>
  );
};

export default Banner;