import Header from "./component/Header";
import Content from "./component/Content";
import React from 'react';
import './App.css';
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Card from './component/Carddetails';
import EarningCard from './component/Card/ECard';
import RevenueCard from './component/Card/RCard';
import ProgressBar from './component/Others/Progress';
import MultiCard from './component/Others/MultiCard';
import Illustrations from './component/Others/Illustration';
import Development from './component/Others/Developmet';

function App() {

  return (
    <>
      <Sidebar >
      <Header />
      <Content />
      
        <Card />
          <div className="row px-4 ml-2 mt-4">
            <EarningCard />
            <RevenueCard />

          </div>
          <div className='flex flex-col lg:flex-row w-full'>
            <div className='flex flex-col w-full'>
              <ProgressBar />
              <MultiCard />
            </div>
            <div className='flex flex-col w-full'>
              <Illustrations />
              <Development />
            </div>
          </div>
        <Footer/>
        </Sidebar>
     
      
    </>
  )
}

export default App
