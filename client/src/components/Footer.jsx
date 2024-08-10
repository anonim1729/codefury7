import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer className="bg-blue-500 dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
          <ul className="text-gray-200 font-medium">
            <li className="mb-4">
              <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
          <ul className="text-gray-200 font-medium">
            <li className="mb-4">
              <a href="https://github.com/themesberg/flowbite" className="hover:underline">Github</a>
            </li>
            <li>
              <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
          <ul className="text-gray-200 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-200 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a href="#" className="text-gray-200 hover:text-white">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {/* SVG path for icon */}
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className="text-gray-200 hover:text-white">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {/* SVG path for icon */}
          </svg>
          <span className="sr-only">Twitter page</span>
        </a>
        {/* Add other social media links similarly */}
      </div>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer