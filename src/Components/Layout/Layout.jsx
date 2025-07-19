import{ useEffect, useState} from "react";
import Style from './Layout.module.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [testString, settestString] = useState()
  useEffect( ()=>{},[])
  return (
    <>
   
       
       <div className="lg:max-w-screen-xl container mx-auto">
          <div className="mb-4">
            <Navbar/>
            <Outlet/>
          </div>

          <Footer/>
       </div>
      

    
    </>
      
  )
}