import React from 'react';

import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <div className="sidebar">
        <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/092/324/264bf24.jpg" alt="Pavel Svitek photo" className="photo"/>
      </div>
      <h1>Pavel Svitek</h1>

      <p>
        I am a young entrepreneur-minded fullstack developer, who came a long way
        from python developer to managing teams and building projects
        for international markets.
      </p>
      <p>
        Across the way, I've gained experience from python programming,
        marketing, managing people, crafting the business model.. and therefore
        I have insights from different points of view on building web
        products/services.
      </p>
      <p>
        Over 8+ years experience in building online web applications, designing
        products, setting up the business processes, motivating people, leading
        teams and more.
      </p>
      <p>
        My life is based on three major principles:
        <ul>
          <li>Think outside the box - Think in a different way and you will find innovative, unconventional solutions.</li>
          <li>Deliver extraordinary results - If you stop thinking conventionally, you'll deliver extraordinary results.</li>
          <li>Travel, learn, discover - Collect experiences, not things. Have stories to tell, not stuff to show.</li>
        </ul>
      </p>
      <p>
        Get in touch on
        {' '}
        <a href="mailto:pavel@pavelsvitek.com">pavel@pavelsvitek.com</a>
        {' '}
        or Whatsapp me on
        {' '}
        <a href="tel:+421904642477"> +421 904 64 24 77</a>.
      </p>
    </div>
  );
};

export default AboutPage;
