import React,{useState,useContext,useEffect} from 'react';
 import AuthContext from '../../Context/AuthProvider';


import Navbar from '../../Components/Navbar/Navbar';
import TopMenu from '../../Components/TopMenu/TopMenu';
import MainSlider from '../../Components/MainSlider/MainSlider';
import Footer from '../../Components/Footer/Footer';
import AboutUs from '../../Components/AboutUS/AboutUs';




const Home = () => {

  const[user,setUser]=useState({})
  const{auth}=useContext(AuthContext);




  useEffect(() => {
    // console.log('auth is Change ... !')
    // console.log(auth,'ttttt')
  }, [auth])
  

 

 

  return (
    <>
    
    <TopMenu/>
    <Navbar/>
    <MainSlider/>
    <AboutUs/>
    <Footer/>

    </>
  )
}

export default Home