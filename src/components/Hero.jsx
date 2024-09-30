import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#6499E9]'>Shelen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces, web applications <br className='sm:block hidden' />and mobile applications
          </p>
          <p className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'> I'm a final year Computer Science student at SUTD specializing in Sodtware Engineering and FinTech. &nbsp; 
          <span>As a final-year Computer Science student with extensive experience in web and mobile application development, I am passionate about building user-centric solutions that address real-world challenges. At Hyundai Motor Group Innovation Center Singapore (HMGICS), I developed web applications using Spring Boot, Vue.js, and .NET (C#), gaining valuable hands-on experience in delivering scalable solutions. At Skyworks, I created a full-stack mobile application utilizing Node.js, React.js, and Microsoft SQL Server. Currently, I’m working on a personal project—a mobile app designed to monitor elderly falls—demonstrating my commitment to impactful, purpose-driven technology. I also have experience optimizing workflows by automating data processes with Python and Bash, significantly boosting efficiency.</span></p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#project'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;