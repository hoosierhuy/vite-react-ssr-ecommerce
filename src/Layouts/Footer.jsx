import Defined from '../Core/Defined'
import { addRemoveSlash } from '../Core/Utils'

const Footer = () => {
  const directory = Defined?.directory
  const directoryURL = addRemoveSlash(directory, true)

  return (
    <footer className="w-full flex flex-col gap-2 justify-center items-center z-0">
      <div className="w-full flex gap-2 justify-center items-center p-4 bg-gradient-to-r from-slate-200 from-60% via-80% to-100% via-teal-100 to-slate-200  border-t-[6px] border-neutral-200">
        <div className="w-full  xl:w-10/12 2xl:w-8/12 flex justify-between items-center gap-2">
          <div className="flex gap-2">
            <span className="text-xs md:text-base">
              <a
                className="md:hidden text-blue-700 hover:opacity-75"
                href="https://github.com/hoosierhuy/vite-react-ssr-ecommerce"
              >
                Vite + React Server Side Render, NodeJS/ExpressJS, Dummy
                E-Commerce Store
              </a>
              <span className="hidden md:block">
                Vite + React Server Side Render, NodeJS/ExpressJS, Dummy
                E-Commerce Store
              </span>
            </span>
          </div>
          <a
            className="text-xs md:text-sm text-sky-700"
            href={`${directoryURL}/sitemap`}
          >
            XML Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
