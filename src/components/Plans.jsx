import Single from '../assets/Single.png';
import Double from '../assets/Double.png';
import Triple from '../assets/Triple.png';

const Plans=()=>{
    return(
        <div className="p-[80px] py-[120px] bg-white">
            <div className="max-w-[94vw] mx-auto grid grid-cols-1 gap-32 md:grid-cols-3 md:gap-10">
                <div className=" shadow-xl h-[450px] text-center rounded-lg md:w-[28vw]">
                    <img src={Single} width={100} className='relative top-[-35px] left-[40%] filter drop-shadow-lg' />
                    <p className="text-2xl font-bold text-center mb-7 text-blue-500">Dgital Marketing</p>
                    <p className="text-2xl font-bold text-center mb-7 text-green-500">Free</p>
                    <p className="text-2xl font-bold text-center text-green-500">Lifetime</p>
                    <p className="text-2xl font-bold text-center mb-5 text-green-500">Access</p>
                    <button className="border-2 border-blue-900 hover:bg-blue-900 hover:border-blue-900 hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black del duration-200">Get Started</button>
                </div>
                <div className=" shadow-xl h-[450px] text-center rounded-lg md:w-[28vw]">
                    <img src={Double} width={100} className='relative top-[-35px] left-[40%] filter drop-shadow-lg' />
                    <p className="text-2xl font-bold text-center mb-7 text-blue-500">WEB Development</p>
                    <p className="text-2xl font-bold text-center mb-7 text-green-500">$9.99</p>
                    <p className="text-2xl font-bold text-center text-blue-500">Monthly</p>
                    <p className="text-2xl font-bold text-center mb-5 text-blue-500">Access</p>
                    <button className="border-2 border-blue-900 hover:bg-blue-900 hover:border-blue-900 hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black del duration-200">Get Started</button>
                </div>
                <div className=" shadow-xl h-[450px] text-center rounded-lg md:w-[28vw]">
                    <img src={Triple} width={100} className='relative top-[-35px] left-[35%] filter drop-shadow-lg' />
                    <p className="text-2xl font-bold text-center mb-7 text-blue-500">App Development</p>
                    <p className="text-2xl font-bold text-center mb-7 text-green-500">$19.99</p>
                    <p className="text-2xl font-bold text-center text-blue-500">Monthly</p>
                    <p className="text-2xl font-bold text-center mb-5 text-blue-500">Access</p>
                    <button className="border-2 border-blue-900 hover:bg-blue-900 hover:border-blue-900 hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black del duration-200">Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default Plans;