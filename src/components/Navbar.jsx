import React ,{useState} from 'react';
import { ReactComponentElement} from 'react';
//import { ReactSVG } from 'react';
import { logo, menu,close } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

const  Navbar = () => {
  const [active,setActive]=useState("Ashish");
  const [hemtoggle,sethemtoggle]=useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={ async ()=>{
          await setActive("abcd");
          console.log("active vbal : "+active);
          window.scrollTo(0,0);
          }}>
       
            <img src={logo} alt="logo" className='w-14 h-14 object-contain' />
            <div className='flex flex-col justify-center align-middle'>
              <span className=' text-white font-semibold' >Ashish Jha</span>
              <span className='hidden sm:block text-white  font-semibold'>| Software Engineer</span>
            </div>
        </Link>
        <ul className='hidden  sm:flex flex-row gap-10'>
          {navLinks.map((links)=>(
            <li key={links.id} className={`${active===links.title?'text-white':'text-secondary'}
            hover:text-white font-medium text-[18px] cursor-pointer
            `}
            onClick={()=>setActive(links.title)} 
            >
              <a href={`#${links.id}`}>{links.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden'>
          <img src={hemtoggle?close:menu} alt='close' className='w-8 h-8 object-contain cursor-pointer'  onClick={()=>sethemtoggle(!hemtoggle)}/>
          <div className={`${!hemtoggle?'hidden':'flex'} right-0 top-20 absolute black-gradient min-w-[150px] min-h-[140px] mx-8 my-2 p-6 rounded-xl`} >
          <ul className='flex flex-col justify-between gap-5  '>
          {navLinks.map((links)=>(
            <li key={links.id} className={`${active===links.title?'text-white':'text-secondary'}
            hover:text-white font-medium text-[18px] cursor-pointer font-poppins font-small 
            `}
            onClick={()=>{
              sethemtoggle(!hemtoggle);
              setActive(links.title);}} 
            >
              <a href={`#${links.id}`}>{links.title}</a>
            </li>
          ))}
        </ul>


          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar