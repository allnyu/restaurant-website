import React from "react";
import ContactCSS from './Contact.module.css';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <>
        <main>
            <section className={ContactCSS.section}>
                <h1 className={ContactCSS.h1}>Contact Us</h1>
                <div className={ContactCSS.number}>
                    <h2 className={ContactCSS.h2}>CONTACT NUMBER</h2>
                    <p><i className="fa-solid fa-mobile"></i>0961 111 2222</p>
                </div>
                <div className={ContactCSS.hours}>
                    <h2 className={ContactCSS.h2}>OPENING HOURS</h2>
                    <p><i className="fa-regular fa-clock"></i>MONDAY-SUNDAY</p>
                    <p>11:00AM-10:00PM</p>
                </div>
                <div className={ContactCSS.place}>
                    <h2 className={ContactCSS.h2}>VISIT US</h2>
                    <p><i className="fa-solid fa-location-dot"></i>6th Avenue, East, Grace Park <br/> Caloocan City, Metro Manila</p>
                </div>
                <p className={ContactCSS.reserve}><i className="fa-solid fa-envelope"></i>reservations@zennys.ph</p>
            </section>
        </main>
        <Footer/>
    </>
  );
}

export default Contact
