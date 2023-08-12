import React from 'react';
import "./services.css";
import { BiCheck } from 'react-icons/bi';

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>I provide responsive design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I provide responsive design for adaptions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desining tools are avaialable.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My design is a User-Centered Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>It has interactive Prototyping.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>It has visual branding.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Developmentf</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>I offer Full-Stack Web Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>There is a Custom Web Application.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I provide E-Commerce solutions to the Clients.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating third-party APIs and Services for functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Maintainance and Optimization for security.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing user-friendly CMS solutions.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT  */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing comprehensive content strategy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Copywriting and Editing is Insured.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desining engaging visual assets.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating videos and editing for marketing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analyzing content performance using various social medias.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services;