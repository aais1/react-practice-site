import Typed from 'react-typed'

const Hero = () => {
    return (
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-emerald-500 font-bold p-1 text-5xl'>
            Learn with us
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>
            <span className='border-none md:border-b-8 w-auto md:border-dotted border-green-500 md:my-3 md:py-1'>Lets Learn Together !!</span>
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              Practice
            </p>
            <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['More', 'And More', 'And More']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
         <button className='border-2 border-white hover:bg-white hover:text-black w-[200px] rounded-md font-medium my-8 mx-auto py-3 text-white text-xl duration-200'>Get Started</button>
        </div>
      </div>
    );
  };

export default Hero;
