import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../src/assets/logo_dark.svg';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="w-full h-full absolute top-0 left-0 z-10">
      <nav className="w-full fixed flex items-center justify-between text-black bg-white py-4 px-8 md:px-32 drop-shadow-lg">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <ul className="hidden lg:flex items-center font-semibold gap-12 text-sm">
          <li className='p-3 hover:bg-sky-500 cursor-pointer hover:text-white rounded-md transition-all'>Home</li>
          <li className='p-3 hover:bg-sky-500 cursor-pointer hover:text-white rounded-md transition-all'>About</li>
          <li className='p-3 hover:bg-sky-500 cursor-pointer hover:text-white rounded-md transition-all'>Blog</li>
          <li className='p-3 hover:bg-sky-500 cursor-pointer hover:text-white rounded-md transition-all'>Contact</li>
        </ul>
        <div className="relative items-center justify-center gap-3 hidden md:flex">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-3 text-sm text-gray-400' />
          <input type="text" placeholder='search' className='py-1 pl-10 rounded-xl border-2 border-blue-500 focus:bg-slate-100 focus:outline-sky-500' />
        </div>
        <FontAwesomeIcon icon={faBars} className='xl:hidden block text-xl cursor-pointer' onClick={() => setIsOpen(true)} />
      </nav>

        {/* -----Mobile Menu------ */}
        <div className={`mobile-menu top-0 right-0 bottom-0 w-48 xl:hidden items-center overflow-hidden drop-shadow-md ${isOpen ? 'w-48 fixed' : 'w-0 h-0'}`}>
          <FontAwesomeIcon icon={faXmark} className='xl:hidden text-xl cursor-pointer py-6 pl-36' onClick={() => {setIsOpen(false)}} />
          <ul className="flex flex-col items-center font-semibold gap-2 text-sm text-center pt-6">
            <li className='w-full p-3 hover:bg-sky-500 cursor-pointer hover:text-white transition-all'>Home</li>
            <li className='w-full p-3 hover:bg-sky-500 cursor-pointer hover:text-white transition-all'>About</li>
            <li className='w-full p-3 hover:bg-sky-500 cursor-pointer hover:text-white transition-all'>Blog</li>
            <li className='w-full p-3 hover:bg-sky-500 cursor-pointer hover:text-white transition-all'>Contact</li>
        </ul>
        </div>
    </div>
  );
}

export default Navbar