import React from "react";
import MenuCSS from './Menu.module.css';
import Footer from '../Footer/Footer';


function Menu() {
  return (
    <>
        <main>
            <section className={MenuCSS.section}>
                <h1 className={MenuCSS.h1}>Our Menu</h1>
                <div className={MenuCSS.menu_main}>
                    <h2><span>SEAFOOD & PASTA</span></h2>
                    <div className={MenuCSS.menu_sub}>
                        <p>SPICY CRISPY FRIED CALAMARES<br/><span>SERVED WITH SPICED VINEGAR AND GARLIC MAYONNAISE DIP</span></p>
                        <p>149</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>GARLIC BUTTER SHRIMP</p>
                        <p>259</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>CAJUN SEAFOOD BOIL<br/><span>SERVED WITH SMALL CRABS, SHRIMPS, MUSSELS, CLAMS, SQUID RINGS IN CAJUN SAUCE</span></p>
                        <p>349</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>SPICY MUSSEL ADOBO</p>
                        <p>179</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>SHRIMP IN CHILI CRAB SAUCE</p>
                        <p>259</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>HONEY SOY GLAZED SALMON</p>
                        <p>259</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>STUFFED BAKED MUSSELS<br/><span>TOPPED WITH GARLIC-BECHAMEL SAUCE</span></p>
                        <p>259</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>CREAMY PRAWN PASTA</p>
                        <p>219</p>
                    </div>
                </div>
                <div className={MenuCSS.menu_desserts}>
                    <h2><span>DESSERTS</span></h2>
                    <div className={MenuCSS.menu_sub}>
                        <p>MANGO ICE CREAM</p>
                        <p>109</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>UBE ICE CREAM</p>
                        <p>109</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>HALO-HALO</p>
                        <p>119</p>
                    </div>
                </div>
                <div className={MenuCSS.menu_drinks}>
                    <h2><span>BEVERAGES</span></h2>
                    <div className={MenuCSS.menu_sub}>
                        <p>MANGO YOGURT SMOOTHIE</p>
                        <p>89</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>STRAWBERRY SMOOTHIE</p>
                        <p>89</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>AVOCADO SMOOTHIE WITH MATCHA AND PISTACHIO</p>
                        <p>89</p>
                    </div>
                    <div className={MenuCSS.menu_sub}>
                        <p>SOFTDRINKS (COKE, ROYAL, SPRITE, SARSI)</p>
                        <p>79</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  );
}

export default Menu
