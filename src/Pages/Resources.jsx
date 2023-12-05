import React from 'react'

const Resouces = () => {
  return (
    <div className='bg-white  p-14'>
    <div className="flex flex-col w-[80vw] mx-auto gap-32 items-center md:flex-row h-[70vh]">
        <div className=" ">
            <p className='text-blue-500 text-4xl my-4 font-bold'>Resources Section</p>
            <p className='font-medium'>Explore the fascinating world of knowledge and skill acquisition.
            Discover the art of learning from experienced professionals who are passionate about
            sharing their expertise. Whether it's gaining insights, mastering new techniques,
            or delving into advanced concepts, our expert-led sessions provide a rich learning experience.
            Join us on a journey of discovery and enhance your understanding with the guidance of seasoned
            mentors.</p>
        </div>
        <div className="text-center md:text-start">
                <button className='border-2 border-black hover:bg-blue-900 hover:border-blue-900 hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black del duration-200'>Discover More</button>
            </div>
    </div>
</div>
  )
}

export default Resouces