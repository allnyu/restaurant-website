import React from "react";
import AboutCSS from './About.module.css';
import aboutMain from '../../assets/background_about.jpg';
import Footer from '../Footer/Footer';


function About() {
  return (
    <>
      <main>
        <section className={AboutCSS.about_main}>
          <h1 className={AboutCSS.h1}>About Us</h1>
          <div className={AboutCSS.about_sub}>
            <img src={aboutMain} alt="About" />
            <p>
              Seafood is not only delicious, but it's also really good for you. It's packed with essential nutrients, like omega-3 fatty acids, vitamins, and minerals, which can promote heart health, boost brain function, and support overall well-being. Plus, seafood is a great source of lean protein, making it a satisfying and guilt-free choice for any meal. So, treat yourself to a flavorful journey that nourishes both body and soul by incorporating seafood into your diet.<br/><br/>
              At Zenny's Seafood Restaurant, we have a deep respect for the sea and its bounty. We strive to create a dining experience that honors both tradition and creativity. Every dish on our menu reflects our dedication to sourcing the finest ingredients, preparing them with care, and serving them with warmth and hospitality.
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default About
