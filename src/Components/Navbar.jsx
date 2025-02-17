import { useState } from 'react'

const Navbar = () => {
    const links = ['Home', 'About', 'Projects', 'Blog', 'Contact'];
    const urls = ['#', '#aa', '#a', '#d', '#a'];
    const [showMenu, setShowMenu] = useState(false);
    return (<nav className="flex flex-row justify-between items-center min-h-20 relative">
        <h1 className="text-2xl sm:text-3xl font-medium bg-gradient-to-r bg-clip-text text-transparent from-[#ae00ff] to-[#001eff] cursor-pointer mb-4 sm:mb-0">Arif Basha</h1>
        <div className="">

            <button
                className="flex sm:hidden items-center gap-2 p-2 bg-gray-900 rounded-md"
                onClick={() => setShowMenu(!showMenu)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
            <ul className={`flex-col sm:flex-row justify-between items-center absolute sm:static  top-20 w-full sm:w-auto left-0  gap-4 sm:gap-10   sm:flex ${showMenu ? 'flex' : 'hidden'}`}>
                {
                    links.map((link, index) => (
                        <a href={urls[index]} key={index} className='transition hover:-skew-x-12 duration-300 bg-clip-text hover:text-transparent text-white from-[#ae00ff] to-[#001eff] hover:bg-gradient-to-r'>
                            {link}
                        </a>
                    ))
                }
            </ul>
        </div>
    </nav>
    )
}

export default Navbar