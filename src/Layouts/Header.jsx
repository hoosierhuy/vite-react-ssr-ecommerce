import { Link } from 'react-router-dom'
import CartBox from '../Components/CartBox'
import Defined from '../Core/Defined'
import { useContext, useEffect } from 'react'
import { projectContext } from '../Core/Context'
const Header = () => {
  const baseTitle = Defined?.title
  const getToken = () => {
    try {
      return sessionStorage.getItem('token') ? true : false
    } catch (error) {
      return false
    }
  }
  const singOut = () => {
    setSign(false)
    sessionStorage.removeItem('token')
  }
  let { sign, setSign } = useContext(projectContext)
  useEffect(() => {
    setSign(getToken())
  }, [])

  return (
    <header
      id="navbar"
      className="w-full bg-gradient-to-r from-slate-400/50 from-0% via-20% to-60% via-teal-200/50 to-slate-400/50 p-4 flex items-center justify-center border-b-[6px] border-neutral-200  sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="w-full xl:w-10/12 2xl:w-8/12 flex justify-between ">
        <div className="flex gap-2 items-center">
          <Link to={`/`} className="flex items-center gap-2 hover:opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-shop"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
            </svg>
            <h1 className="font-medium text-3xl ">
              {baseTitle || 'Dummy E-Commerce Store'}
            </h1>
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            className="opacity-100 hover:opacity-80 text-teal-600"
            href="https://fakestoreapi.com/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-patch-question-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-3">
          {sign && (
            <>
              <div className="hidden sm:flex text-sm items-center gap-2 bg-slate-100 p-2 rounded-sm">
                <div className="">Hello Swifties</div>-
                <button onClick={singOut} className="text-xs text-blue-800">
                  Sign out
                </button>
              </div>
              <button
                onClick={singOut}
                className="sm:hidden bg-slate-100/80 p-1 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-box-arrow-right text-neutral-600"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </button>
            </>
          )}
          {!sign && (
            <div
              id="headerSingIn"
              className="flex text-sm items-center gap-2 bg-slate-100 p-2 rounded-sm"
            >
              <Link to={`./signin`} className="text-xs">
                Sign in
              </Link>
            </div>
          )}
          <CartBox />
        </div>
      </div>
    </header>
  )
}
export default Header
