import React from 'react'
import './Cardim.css';
import {FaArrowRight} from 'react-icons/fa';
const Cardim =()=> {
  return (
    <div className="flex justify-between">

        
<div class=" ml-8  h-3  w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
              <div className='mb-8'>
                              <a href="#">
        <img class=" w-96  pt-0 ml-4 rounded-t-lg" src="./images/article3.jpg" alt="" />
    </a>
  </div>
              <div class="ml-4">
             <div className='bg-white-200 w-96 border'>   
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text ">KCB Group PLC Completes Acquistion of Babque Populaire du Rwanda Plc (BPR)</h5>
                      </a>
                      
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">KCB Group PLC  has completed the acquistion of Babque Populaire du Rwanda Plc (BPR) from Atlas Mara Mauritius <br/> Limited ...<br/> AUG 25 2021</p>
       </div> 
                      <a href="#" class=" w-96 inline-flex items-center px-3 py-2 text-sm font-medium  text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
            Read more
            <a href="" ><FaArrowRight className='text-black ml-52'/> </a>
        </a>
    </div>
</div>




          
    < div className='card' >  
<div class=" mb-4 max-w-sm p-3 bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-64">
    
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">BPR BANK RWANDA Plc  BPR-BANK - System Upgrade <br/>Press Release <br/> FEB-02 2023.</p>
    
</div>




          


          
<div class=" mb-4 max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">BPR Bank Rwanda Plc- New Managing <br/> Director Appointment- Kinyarwanda Press <br/> Release <br/> FEB 02 2023 </p>
    
</div>

          






          
<div class="  max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Itangazo Rigenewe Abanyamigabane Ba <br/>BPR bANK Rwanda Plc <br/> AUG 12 2023</p>
  
</div>

          
       </div>    
        


          
          </div>
  )
}

export default Cardim;
