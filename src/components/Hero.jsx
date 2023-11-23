import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-emerald-500 font-bold p-1 text-5xl'>
            Learn with us
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 md:mb-4'>
            <span className='border-none md:border-b-8 w-auto md:border-dotted border-green-500 md:my-10 md:py-1'>Lets Learn Together !!</span>
          </h1>
          <div className='flex justify-center items-center'>
            
            <TypeAnimation
                className='md:text-5xl sm:text-4xl text-xl font-bold py-4'
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'Practice',
                  1000,
                  'Pratice More',
                  1000,
                  'Pratice Makes Perfect',
                  1000,
                  'Practice Makes You Perfect',
                  1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
          />
          </div>
         <button className='border-2 border-white hover:bg-white hover:text-black w-[200px] rounded-md font-medium my-8 mx-auto py-3 text-white text-xl duration-200'>Get Started</button>
        </div>
      </div>
    );
  };

export default Hero;
