import React from 'react'

const pickagent = () => {
  return (
    // <div className=' sm:flex sm:flex-col gap-4 md:flex md:flex-row  min-h-screen justify-center items-center bg-yellow-400  '>
    //   <div className='bg-blue-100 p-20 rounded-lg mx-4 my-4 mb-4 text-center'><div></div></div>
    //   <div className='bg-blue-100 p-20 rounded-lg mx-4 my-4 mb-4 text-center'>Pick An Agent</div>
    //   <div className='bg-blue-100 p-20 rounded-lg mx-4 my-4 mb-4 text-center'>Pick An Agent</div>
    //   <div className='bg-blue-100 p-20 rounded-lg mx-4 my-4 mb-4 text-center'>Pick An Agent</div>
    // </div>
  <>

        <button type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
        Launch demo modal full screen
      </button>


    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalFullscreen" tabIndex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
        <div
          className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalFullscreenLabel">
              Modal title
            </h5>
            <button type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body relative p-4">...</div>
          <div
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default pickagent