import React from "react";
import GalleryCSS from './Gallery.module.css';
import calamares from '../../assets/calamares_gal.jpg';
import garlic from '../../assets/garlic_gal.jpg';
import cajun from '../../assets/cajun_gal.jpg';
import tahong from '../../assets/tahong_gal.jpg';
import shrimp from '../../assets/shrimp_gal.jpg';
import salmon from '../../assets/salmon_gal.jpg';
import mussles from '../../assets/mussels_gal.jpg';
import pasta from '../../assets/pasta_gal.jpg';
import icemango from '../../assets/ice_mango_gal.jpg';
import iceube from '../../assets/ice_ube_gal.jpg';
import halohalo from '../../assets/halohalo_gal.jpg';
import mango from '../../assets/mango_drink_gal.jpg';
import strawberry from '../../assets/strawberry_drink_gal.jpg';
import avocado from '../../assets/avocado_drink_gal.jpg';
import Footer from '../Footer/Footer';


function About() {
  return (
    <>
        <main>
            <section>
                <h1 className={GalleryCSS.h1}>The Gallery</h1>
                <div className={GalleryCSS.gallery_main}>
                    <div className={GalleryCSS.gallery}>
                        <img src={calamares} alt="Spicy Crispy Fried Calamares"/>
                        <div className={GalleryCSS.name}>SPICY CRISPY FRIED CALAMARES</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={garlic} alt="Garlic Butter Shrimp"/>
                        <div className={GalleryCSS.name}>GARLIC BUTTER SHRIMP</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={cajun} alt="Cajun Seafood Boil"/>
                        <div className={GalleryCSS.name}>CAJUN SEAFOOD BOIL</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={tahong} alt="Spicy Mussel Adobo"/>
                        <div className={GalleryCSS.name}>SPICY MUSSEL ADOBO</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={shrimp} alt="Shrimp in Chili Crab Sauce"/>
                        <div className={GalleryCSS.name}>SHRIMP IN CHILI CRAB SAUCE</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={salmon} alt="Honey Soy Glazed Salmon"/>
                        <div className={GalleryCSS.name}>HONEY SOY GLAZED SALMON</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={mussles} alt="Stuffed Baked Mussels"/>
                        <div className={GalleryCSS.name}>STUFFED BAKED MUSSELS</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={pasta} alt="Creamy Prawn Pasta"/>
                        <div className={GalleryCSS.name}>CREAMY PRAWN PASTA</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={icemango} alt="Mango Ice Cream"/>
                        <div className={GalleryCSS.name}>MANGO ICE CREAM</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={iceube} alt="Ube Ice Cream"/>
                        <div className={GalleryCSS.name}>UBE ICE CREAM</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={halohalo} alt="Halo-Halo"/>
                        <div className={GalleryCSS.name}>HALO-HALO</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={mango} alt="Mango Yogurt Smoothie"/>
                        <div className={GalleryCSS.name}>MANGO YOGURT SMOOTHIE</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={strawberry} alt="Strawberry Smoothie"/>
                        <div className={GalleryCSS.name}>STRAWBERRY SMOOTHIE</div>
                    </div>
                    <div className={GalleryCSS.gallery}>
                        <img src={avocado} alt="Avocado Smoothie with Matcha And Pistachio"/>
                        <div className={GalleryCSS.name}>AVOCADO SMOOTHIE WITH MATCHA AND PISTACHIO</div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  );
}

export default About
