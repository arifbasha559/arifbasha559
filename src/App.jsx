import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';


const App = () => {

  

  ;
  return (
    <div  className=''>
      <div className="bg-[#00000061] max-w-screen font-mono min-h-screen">

        <div className=" px-0 sm:px-6 md:px-10 lg:px-20 text-white ">
          <div className="max-w-full min-w-full min-h-screen ">

            <Navbar />
            <Hero />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;

