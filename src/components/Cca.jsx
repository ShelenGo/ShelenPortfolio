import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { cca } from "../constants";

const CcaCard = ({
  index,
  name,
  description,
  image,
}) => {
  return (
  
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-tertiary p-5 rounded-2xl sm:w-[530px] w-full flex-shrink-0 h-[400px] mx-4 mb-7 mt-7">
        <div className='relative w-full h-full rounded-lg overflow-y border border-primary'>
          <img
            src={image}
            alt='cca_image'
            className='w-full h-full object-cover rounded-2xl'
            style={{objectFit: "cover", objectPosition: "center"}}
          />
        </div>

        <div className='mt-5 p-4 bg-primary rounded-b-lg overflow-y-auto max-h-[40%]'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
    </motion.div>
    
  );
};

const Cca = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Leadership Experience</p>
          <h2 className={`${styles.sectionHeadText}`}>CCA</h2>
      </motion.div>

      <div className='mt-18 flex flex-wrap gap-3 '>
        {cca.map((ccaItem, index) => (
          <CcaCard key={`cca-${index}`} index={index} {...ccaItem} className="mt-5 p-4 bg-primary rounded-b-lg overflow-hidden max-w-[530px] w-full"/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Cca, "")