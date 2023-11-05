"use client";
import { motion } from "framer-motion";
import "./aboutMe.scss";


const variants = {
  initial: {
    x: -500,
    y:100,
    opacity:0
  },
  animate: {
    x: 0,
    y:0,
    opacity:1,
    transition: {
      duration:1,
      staggerChildren:0.1
    }
  }
}
export const AboutMe = () => {
  return (
    <motion.div className="aboutMe">
      <motion.div className="textContainer" variants={variants} >
        <p>
          I focus on hekping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants} >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Uniques</b> ideas
          </h1>
        </div>
          <div className="title">
            <h1>
              <b>For Your</b> Business.
            </h1>
            <button>What we Do?</button>
          </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} >
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            blanditiis beatae facere animi? Mollitia delectus, quo maxime error
            blanditiis optio provident ipsam? Hic inventore labore natus quod
            aspernatur culpa possimus!
          </p>
          <button>GO!</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            blanditiis beatae facere animi? Mollitia delectus, quo maxime error
            blanditiis optio provident ipsam? Hic inventore labore natus quod
            aspernatur culpa possimus!
          </p>
          <button>GO!</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            blanditiis beatae facere animi? Mollitia delectus, quo maxime error
            blanditiis optio provident ipsam? Hic inventore labore natus quod
            aspernatur culpa possimus!
          </p>
          <button>GO!</button>
        </div>
      </motion.div>
    </motion.div>
  );
};
