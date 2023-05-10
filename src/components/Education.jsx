import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { ggsipulogo } from '../assets'


const Graduation=()=>(
    <motion.div variants={fadeIn("","spring",0.5,0.75)} 
    className="bg-black-200 p-10 rounded-3xl  w-full xs:h-[350px]  xl:h-[250px] "
     >
      <div className='flex flex-col justify-between w-full h-full' >
        <div className='w-full flex flex-row justify-between'>
          <div>
          <p className='text-white tracking-wider text-[18px]'>
              Bachelor of Technology(Computer Science)
          </p>
          <p className='text-white tracking-wider text-[18px]'>
              Aug 2017 - June 2021
          </p>
          <p className='text-white tracking-wider text-[18px]'>
          Guru Gobind Singh Indraprastha University - GGSIPU
          </p>
          </div>
          <div>
              <img src={ggsipulogo} alt="University logo" className='w-[80px] h-[80px] object-contain' />
          </div>

        </div>
        <div className='w-full h-20p flex flex-col justify-end'>
        <p className='blue-text-gradient tracking-wider text-[18px] font-bold'>
           Aggregate - 73.42%
          </p>

        </div>
      </div>
      {/* <p className='text-white font-black text-[48px]' >"</p>
      <div className='mt-1' >
      <p className='text-white tracking-wider text-[18px]' 
      >{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1' >
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient' >@</span>{name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`}
        className="w-10 h-10 rounded-full object-cover" />

      </div>

      </div> */}
     
    </motion.div>
)

const Education = () => {
  return (
    <div className='mt-12 bg-black rounded-[20px] ' >
      <div className={`${styles.padding}
      bg-tertiary rounded-2xl   xl:min-h-[300px]  Education`}>
        <motion.div  variants={textVariant()} >
          <p className={styles.sectionSubText} >
            Here is my
          </p>
          <h2 className={styles.sectionHeadText} >
            Education.
          </h2>

        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20
      pb-14 flex flex-wrap gap-7  bg-tertiary rounded-2xl `} >
          <Graduation/>
      </div>
    </div>
  )
}

export default SectionWrapper(Education,"")