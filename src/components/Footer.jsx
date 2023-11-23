
const Footer = () => {
    return (
        <footer className="bg-blue-900">
            <div className=" w-[80vw] mx-auto pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <h2 className="text-white font-bold">About Us</h2>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h2 className="text-white font-bold">Contact</h2>
                        <p className="text-white">Phone: 123-456-7890</p>
                        <p className="text-white">Email: dumy@example.com</p>
                    </div>
                    <div>
                        <h2 className="text-white font-bold">Services</h2>
                        <ul className="text-white">
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <a href="#" className="text-white mx-2">Email</a>
                    <a href="#" className="text-white mx-2">Facebook</a>
                    <a href="#" className="text-white mx-2">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
