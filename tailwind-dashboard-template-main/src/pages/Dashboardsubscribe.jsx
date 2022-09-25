import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import DashboardCard14 from '../partials/dashboard/DashboardCard14';
import Card from '../partials/dashboard/Card';
import Card2 from '../partials/dashboard/Card2';
import Banner from '../partials/Banner';
import  Mymodal  from '../components/modal';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'



function Dashboardsubscribe() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-gradient">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2 ">
                {/* Filter button */}
                {/* <FilterButton /> */}
                {/* Datepicker built with flatpickr */}
                {/* <Datepicker /> */}
                {/* Add view button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                 */}
              </div>

            </div>
            {/* <div class='grid grid-flow-col md:flex-col'>
            <Card />
            <Card2 />
            <Card2 />
            </div> */}
            
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              {/* Line chart (Acme Advanced) */}
              {/* <DashboardCard01 /> */}
              
    {/* <div className='bg-glass2 h-max rounded-full text-center px-2 py-1'>
      <a class="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/b9e23fa5-8270-489b-97b1-ce43669c4129">
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>
    </div> */}
                <div class="flex justify-center col-span-full sm:col-span-6 xl:col-span-4  h-max relative text-center">
                <div class="rounded-lg shadow-lg bg-glass2 max-w-sm bg-glass2">
                  <a href="#!">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                    <h5 class="text-gradient text-xl font-poppins font-extrabold mb-2">Cigar-Package</h5>
                    <p class="text-green-300 text-base mb-4 font-extrabold font-poppins">
                      ROI: 20%
                    </p>
                    <div className='flex  justify-between'>
                    <div className='bg-red-400 rounded-full'><Mymodal/></div>
                    <div>
                    <a class="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/b9e23fa5-8270-489b-97b1-ce43669c4129" target='blank'>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>

                    </div>
                    </div>
                  </div>
                </div>
                
              </div>
                <div class="flex justify-center col-span-full sm:col-span-6 xl:col-span-4  h-max relative text-center">
                <div class="rounded-lg shadow-lg bg-glass2 max-w-sm">
                  <a href="#!">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                    <h5 class="text-gradient text-xl font-poppins font-extrabold mb-2">Single Wrap-Package</h5>
                    <p class="text-green-300 text-base mb-4 font-poppins font-extrabold">
                      ROI:37%
                    </p>
                    <div className='flex  justify-between'>
                    <div className='bg-red-400 rounded-full'><Mymodal/></div>
                    <div>
                    <a class="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/b9e23fa5-8270-489b-97b1-ce43669c4129" target='blank'>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="flex justify-center col-span-full sm:col-span-6 xl:col-span-4  h-max relative text-center">
                <div class="rounded-lg shadow-lg bg-glass2 max-w-sm">
                  <a href="#!">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                    <h5 class="text-gradient text-xl font-poppins font-extrabold mb-2">Double Wrap-Package</h5>
                    <p class="text-green-300 text-base mb-4 font-poppins font-extrabold">
                     ROI:44%
                    </p>
                    <div className='flex  justify-between'>
                    <div className='bg-red-400 rounded-full'><Mymodal/></div>
                    <div>
                    <a class="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/b9e23fa5-8270-489b-97b1-ce43669c4129" target='blank'>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>

                    </div>
                    </div>                  </div>
                </div>
              </div>
                <div class="flex justify-center col-span-full sm:col-span-6 xl:col-span-4  h-max relative text-center">
                <div class="rounded-lg shadow-lg bg-glass2 max-w-sm">
                  <a href="#!">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                    <h5 class="text-gradient text-xl font-medium mb-2 font-poppins font-extrabold">Box of Wraps-Package</h5>
                    <p class="text-green-300 text-base mb-4 font-poppins font-extrabold">
                      ROI:56%
                    </p>
                    <div>
                      <div className='flex  justify-between'>
                    <div className='bg-red-400 rounded-full'><Mymodal/></div>
                    <div>
                    <a class="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/b9e23fa5-8270-489b-97b1-ce43669c4129" target='blank'>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>

                    </div>
                    </div>
                      
      
    </div>
                    {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                  </div>
                </div>
              </div>
              {/* <DashboardCard01 /> */}
              {/* <DashboardCard02 /> */}
              {/* Line chart (Acme Professional) */}
              {/* <DashboardCard03 /> */}
              {/* Bar chart (Direct vs Indirect) */}
              {/* <DashboardCard04 /> */}
              {/* Line chart (Real Time Value) */}
              {/* <DashboardCard05 /> */}
              {/* Doughnut chart (Top Countries) */}
              {/* <DashboardCard06 /> */}
              {/* Table (Top Channels) */}
              {/* <DashboardCard07 /> */}
              {/* Line chart (Sales Over Time) */}
              {/* <DashboardCard08 /> */}
              {/* Stacked bar chart (Sales VS Refunds) */}
              {/* <DashboardCard09 /> */}
              {/* Card (Customers) */}
              {/* <DashboardCard10 /> */}
              {/* Card (Reasons for Refunds) */}
              {/* <DashboardCard11 /> */}
              {/* Card (Recent Activity) */}
              {/* <DashboardCard12 /> */}
              {/* <DashboardCard14 /> */}
              {/* Card (Income/Expenses) */}
              
              {/* <DashboardCard13 /> */}
              
              
            </div>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboardsubscribe;