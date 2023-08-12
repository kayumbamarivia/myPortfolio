import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/1.png';
import IMG2 from '../../assets/2.png';
import IMG3 from '../../assets/5.jpg';
import IMG4 from '../../assets/2.png';
import IMG5 from '../../assets/5.jpg';
import IMG6 from '../../assets/6.png';

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'IT is interesting',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 2,
      image: IMG2,
      title: 'IT is good',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 3,
      image: IMG3,
      title: 'IT is better',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 4,
      image: IMG4,
      title: 'IT is best',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 5,
      image: IMG5,
      title: 'IT is joyful',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 6,
      image: IMG6,
      title: 'IT is successful',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    }
  ];
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;