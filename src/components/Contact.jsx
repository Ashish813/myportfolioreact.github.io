import React from 'react';

import { useState,useRef } from 'react';
import { motion } from 'framer-motion';
// import { emailjs } from '@emailjs/browser';
import emailjs from 'emailjs-com';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
// this all comes from email js
//template_q5zdxjd  id of template
//service_24qx97v    service id

// MKDb-S4eAPr-NE-Dq     public key 

const Contact = () => {
  const formRef=useRef();
const [form,setform]=useState({
  name:'',
  email:'',
  message:'',
})
const [loading,setloading]=useState(false);

const handleChange=(e)=>{
  const {name,value} =e.target;
 setform({...form,[name]:value})
}

const handleSubmit=(e)=>{
  e.preventDefault();
 
  setloading(true);
  emailjs.send('service_24qx97v'
  ,'template_q5zdxjd',
  {from_name:form.name,
    to_name:'Ashish',
    from_email:form.email,
    to_email:'ashishkr.jha1999@gmail.com',
    message:form.message,
  },'MKDb-S4eAPr-NE-Dq')
  .then(()=>{
    setloading(false);
    alert('Thank you. I will get back to you as soon as possible.')
    setform({
      name:'',
      email:'',
      message:'',
    },(error)=>{
      setloading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  })

}


  return (
    <div className='xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left',"tween",0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>
        <form ref={formRef} 
        onSubmit={handleSubmit} 
        className="mt-12 flex flex-col gap-8">
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >  
              Your Name
            </span>
        <input type="text" name="name" value={form.name} 
         onChange={handleChange}  placeholder="What's your name?" required
         className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  border-none font-medium '  />
          </label>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >  
              Your Email
            </span>
        <input type="email" name="email" value={form.email}  required
         onChange={handleChange}  placeholder="What's your email?"
         className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  border-none font-medium '  />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4' >  
              Your Message
            </span>
        <textarea rows={7}  name="message" value={form.message}  required
         onChange={handleChange}  placeholder="What do you want to say?"
         className='bg-tertiary py-4 px-6 placeholder:text-secondary resize-none text-white rounded-lg outline-none  border-none font-medium '  />
          </label>

          <button type='submit' 
          className='bg-tertiary py-3 px-8 outline-none
          w-fit text-white font-bold shadow-md shadow-primary rounded-xl '>
            {loading? 'Sending...': 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div 
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas  />
      </motion.div>
    </div>
  )
}

export default  SectionWrapper(Contact,"contact")