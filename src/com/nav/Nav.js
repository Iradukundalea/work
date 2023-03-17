import React from 'react'
import './Nav.css';

const Nav=()=> {
  return (
 

<div className="bac">
  <div class=" w-300 bg-black-500 container flex flex-wrap items-center justify-between ">
  <div class="nav">
    <ul className=" w-full flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black ml- dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-0-80">
     
    <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white bg-sky-500 hover:bg-sky-700 bg-blue-500" >Kcb Group</a>
                      </li>
         <div className=" p-1 bg-teal-400">                
      <li>
       <a href="#" class="block py-2 pl-3 pr-4 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white bg-sky-500 hover:bg-sky-700 bg-blue-500" >BPR Internet Banking</a>
                          </li>
      
                      </div>
                       <div className = " p-1 bg-teal-400" >
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white bg-sky-500 hover:bg-sky-700 bg-blue-500" >KCB RW Internet Banking</a>
      </li>
       
                          </div>
    </ul>
    
  </div>
          </div>
    </div>
   
    
    
  )
}

export default Nav;
