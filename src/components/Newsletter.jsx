
const Newsletter = () => {
  return (
    <div className="bg-blue-900 p-8 ">
        <div className=" text-white flex flex-col w-[80vw] mx-auto  items-center gap-10 md:flex-row md:py-20 md:gap-32  ">
            <div className="">
                <h1 className="text-2xl font-bold text-blue-500 underline underline-offset-4">Want To Learn</h1>
                <p className="text-xl">Subscribe to our newsletter for the latest updates.</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-center">
                <input className="h-12 w-[50vw] p-2 rounded-tl rounded-bl text-black md:w-72 " type="text" placeholder="Enter your email address"/>
                <button className="bg-red-600 text-white rounded-tr rounded-br px-3 py-2 hover:bg-red-800">Subscribe</button>
            </div>
        </div>
    </div>
  );
};

export default Newsletter;
