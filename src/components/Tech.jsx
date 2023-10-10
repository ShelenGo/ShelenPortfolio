import React from "react";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';

const TechCard = ({ index, title, icon }) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-[180px] h-[150px] black-gradient p-[5px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white rounded-[20px] py-5 px-12 h-full flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-black text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
);

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
      </motion.div>
    <div className='mt-20'>
    <div className='mt-100 flex flex-wrap gap-20'>
      {technologies.map((technology, index) => ( 
        <div className='w-28 h-28' key={technology.name}>
          <TechCard icon={technology.icon} index={index} title={technology.name} /> 
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");