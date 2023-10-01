import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex bg-white h-12 items-center justify-center flex-row px-4'>
            <footer className="sticky-footer bg-white w-4/5">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2023</span>
                </div>
              </div>
            </footer>
            <a className="scroll-to-top rounded-md" href="#page">
              <i className="fas fa-angle-up"></i>
            </a>
          </div>
    </div>
  )
}

export default Footer
