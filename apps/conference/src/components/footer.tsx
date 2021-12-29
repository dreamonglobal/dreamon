import React from 'react'

const Year = new Date().getFullYear()

const Footer = () => (
  <footer className="bg-black" aria-labelledby="footer-heading">
    <div className="border-t border-gray-900 py-8">
      <p className="text-base text-white xl:text-center">
        &copy; {Year} Dream On: Global. All rights reserved. |{' '}
        <a href="https://dreamon.world/privacy-policy">Privacy Policy</a>
      </p>
    </div>
  </footer>
)
export default Footer
