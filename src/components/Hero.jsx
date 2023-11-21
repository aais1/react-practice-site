import Typed from 'react-typed'

const Hero = () => {
    return (
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-emerald-500 font-bold p-2 text-5xl'>
            Learn with us
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Lets Learn Together.
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              Pracitce
            </p>
            <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['More', 'And More', 'And More']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
        </div>
      </div>
    );
  };

export default Hero;
