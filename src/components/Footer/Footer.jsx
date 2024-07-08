import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className="footerMain">
            <div className="footerSub">
                <div className="footerIcon">
                    <h4>Follow us</h4>
                    <a href="https://facebook.com"><i class="fa-brands fa-facebook" id="fb_icon"></i></a>
                    <a href="https://youtube.com"><i class="fa-brands fa-youtube" id="yt_icon"></i></a>
                </div>
                <div className="footerLink">
                    <h4>Explore</h4>
                    <p><a href="/about">About</a></p>
                    <p><a href="/contact">Contact</a></p>
                    <p><a href="/menu">Menu</a></p>
                </div>
            </div>
            <div className="footerContact">
                <h4>Contact</h4>
                <p><i class="fa-solid fa-mobile"></i>(+63)961 111 2222</p>
                <p><i class="fa-solid fa-location-dot"></i>6th Avenue, East, Grace Park <br/> Caloocan City, Metro Manila</p>
                <p><i class="fa-solid fa-envelope"></i>reservations@zennys.ph</p>
            </div>
        </div>
        <div className="credit">
            <p> © Copyright 2024 Zenny's All Rights Reserved</p>
        </div>
    </footer>
  );
}

export default Footer