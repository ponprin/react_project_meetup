import s from "./Footer.module.css";
import React from "react";

// let classesNew={`${c1}${c2}`};

const Footer = () => {
  return (
    <div className={s.footer_back}>
      <footer>
        <div className={s.footer_start}>
          <div>Create your own Meetup group.</div>
          <a className={s.pressbutton} href="#">
            Get Started
          </a>
        </div>
        <div className={s.footer_2section}>
          <div>
            <li>Your Account</li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Become an Afiiliate</a>
            </li>
            <li></li>
            <li></li>
          </div>
          <div className={s.footer_find}>
            <li>Discover</li>
            <li>
              <a href="#s">Groups</a>
            </li>
            <li>
              <a href="#s">Calendar</a>
            </li>
            <li>
              <a href="#s">Topics</a>
            </li>
            <li>
              <a href="#s">Cities</a>
            </li>
            <li>
              <a href="#s">Online Events</a>
            </li>
            <li>
              <a href="#s">Local Guides</a>
            </li>
          </div>
          <div className={s.footer_about}>
            <li>Meetup</li>
            <li>
              <a href="#s">About</a>
            </li>
            <li>
              <a href="#s">Blog</a>
            </li>
            <li>
              <a href="#s">Meetup Pro</a>
            </li>
            <li>
              <a href="#s">Careers</a>
            </li>
            <li>
              <a href="#s">Apps</a>
            </li>
            <li>
              <a href="#s">Podcast</a>
            </li>
          </div>
        </div>
        <div className={s.links}>
          <div>Follow us</div>
          <div className={s.OSstore}>
            <a href="#">
              <img
                alt="get-it-on-google-play"
                src="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256"
                decoding="async"
                data-nimg="intrinsic"
                srcset="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=128 1x, https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256 2x"
              />
            </a>
            <a href="#">
              <img
                alt="download-on-the-app-store"
                src="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=256"
                decoding="async"
                data-nimg="intrinsic"
                srcset="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=128 1x, https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=256 2x"
              />
            </a>
          </div>
        </div>
        <div className={s.footer_end}>
          <t>© 2022 Meetup</t>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
          <a href="">Help</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
