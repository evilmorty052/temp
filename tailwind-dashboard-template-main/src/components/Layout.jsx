import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import  Navbar  from './Navbar'
// import  Avbar  from '../components/navbar/Navbar'
// import './Layout.css'

export function Layout({ children }) {
  return (
  //  <div >
  //    <Box mb={0}>
  //     <div className='bg-transparent z-50 mb-4 px-4'>
  //     <Navbar />
  //     </div>
  //     <div>
  //     <Container maxW='container.lg'>{children}</Container> 
  //     </div>
  //   </Box>
  //  </div>

            // <div className='mb-16 bg-black-gradient fixed top-0 right-0 left-0'>
            //     <div className='px-4'>
            //       <Navbar />
            //     </div>
            //     <div className='mx-auto h-screen w-full '>
            //       <div className='h-full flex w-full mb-10 pb-10 border border-red-600 '>
            //         <div className='mx-auto flex-1 max-w-4xl mb-0 px-0 border border-red-600 pb-10'>
            //         {children}
            //         </div>
            //     </div>
                    
            //     </div>
            // </div> 
            <div className='min-h-screen bg-gray-gradient border border-transparent'>
              <div className='px-4'>
                <Navbar/>
              </div >
           <div className='px-2 min-w-md min-w-4xl'>  {children}  </div>
               
            </div> 



    
  )
}


