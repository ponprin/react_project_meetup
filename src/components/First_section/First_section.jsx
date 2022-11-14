import s from "./First_section.module.css";
import React from "react";
import Meetuporgs from "./Meetup_orgs/Meetup_orgs";
const First_section = () => {
  return (
    <div>
      <section className={s.first_section}>
        <div className={s.section_block}>
          <a href="/main" className={s.logobox}>
            <img
              src="https://v.fastcdn.co/u/f91f856b/61499007-0-Meetup20YearsAlt.png"
              alt=""
              id={s.logo}
            />
          </a>
        </div>
        <img
          alt=""
          src="https://secure.meetupstatic.com/next/images/blobs/green-blob.svg"
          className={s.bubble_blue}
        ></img>
        <div className={s.years}>
          <h1>Celebrating 20 years of real connections on Meetup</h1>
          <p className="">
            <span className="">
              Whatever you’re looking to do this year, Meetup can help. For 20
              years, people have turned to Meetup to meet people, make friends,
              find support, grow a business, and explore their interests.
              Thousands of events are happening every day—join the fun.
            </span>
          </p>
        </div>
        <div className={s.slide}>
          <img
            src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=640"
            alt=""
          />
        </div>
        <div className={s.meetuporganizing}>
          <h1 className={s.namemeetupclass}>Meetup makes organizing easy</h1>
          <div id={s.section_orgs}>
            <Meetuporgs
              image="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=256"
              h3="Join a group"
              p="Do what you love, meet others who love it, find your community. The rest is history!"
            />
            <Meetuporgs
              image="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=256"
              h3="Find an event"
              p="Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking."
            />
            <Meetuporgs
              image=" https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256"
              h3="Start a group"
              p="You don’t have to be an expert to gather people together and explore shared interests."
            />
          </div>
        </div>
      </section>
      <a href="/signup" className={s.joinmeetup}>
        Join Meetup
      </a>
    </div>
  );
};
export default First_section;
