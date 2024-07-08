import React from "react";
import HomeCSS from './Home.module.css';
import homeMain from '../../assets/background_home.jpg';
import homeMenu from '../../assets/menu.jpg';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
        <main>
            <section className={HomeCSS.main}>
                <img src={homeMain} alt="Main_img" className={HomeCSS.mainImg} />
                <h1 className={HomeCSS.h1}>Enjoy your favorite SEAFOOD<br/>dishes with QUALITY ingredients</h1>
            </section>
            <section className={HomeCSS.menu}>
                <div className={HomeCSS.menutxt}>
                    <h2 className={HomeCSS.h2}>Our Menu </h2>
                    <p>
                        Welcome to our seafood restaurant. We serve a variety of delicious seafood dishes made from the finest catches sourced from sustainable fisheries. Our menu is carefully crafted to offer a range of exquisite flavors and ocean-fresh delights.<br/><br/>Whether you're looking for a leisurely seafood feast or a quick bite by the shore, we invite you to indulge in the flavors of the sea and experience why our seafood restaurant is a beloved destination for seafood enthusiasts. Come join us and discover the magic of our culinary oasis.
                    </p>
                    <a href="/menu">VIEW THE MENU</a>
                </div>
                <div>
                    <img src={homeMenu} alt="Menu_img" className={HomeCSS.menuImg} />
                </div>
            </section>
        </main>
        <Footer/>
    </>
  );
}

export default Home