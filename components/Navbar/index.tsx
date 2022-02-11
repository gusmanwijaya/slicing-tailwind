import HamburgerMenu from "../HumbergerMenu";

export default function Navbar() {
  return (
    <>
      <div className="hidden md:block container px-8 py-8 lg:px-24">
        <div className="flex flex-row items-center justify-between">
          <div className="w-3/12">
            <h1 className="text-xl font-semibold tracking-widest text-center uppercase">
              Slicing <span className="text-yellow-500">Tailwind</span>
            </h1>
          </div>
          <div className="w-6/12">
            <ul className="flex flex-row items-center justify-center space-x-10">
              <li>
                <a
                  href="#"
                  className="text-base text-opacity-70 text-white hover:text-yellow-500"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-opacity-70 text-white hover:text-yellow-500"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-opacity-70 text-white hover:text-yellow-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-opacity-70 text-white hover:text-yellow-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-3/12 flex justify-center">
            <button
              type="button"
              className="btn bg-transparent border border-yellow-400 rounded-full px-8 py-4 text-yellow-400 hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500 shadow-md hover:shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-between items-center w-full p-4">
        <h1 className="text-base font-semibold tracking-widest text-center uppercase">
          Slicing <span className="text-yellow-500">Tailwind</span>
        </h1>
        <HamburgerMenu />
      </div>
    </>
  );
}
