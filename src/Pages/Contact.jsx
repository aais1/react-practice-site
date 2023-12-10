import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white  p-14'>
    <div className="flex flex-col w-[80vw] mx-auto gap-32 items-center md:flex-row h-[50vh]">

        <div className=" ">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>

        <p className="text-gray-700 mb-6">Have questions, suggestions, or just want to say hello? We'd love to hear from you! Reach out to us using the contact information below:</p>

        <div className="mb-8">

            <h3 className="text-xl font-bold mb-2 text-gray-800">Customer Support:</h3>
            <ul className="list-disc pl-6">
                <li><strong>Email:</strong> <a href="mailto:support@yourcompany.com" className="text-blue-500">support@yourcompany.com</a></li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM (GMT)</li>
            </ul>

        </div>

        <div className="mb-8">

            <h3 className="text-xl font-bold mb-2 text-gray-800">General Inquiries:</h3>
            <ul className="list-disc pl-6">
                <li><strong>Email:</strong> <a href="mailto:info@yourcompany.com" className="text-blue-500">info@yourcompany.com</a></li>
                <li><strong>Phone:</strong> +1 (555) 987-6543</li>
            </ul>

        </div>
        </div>
    </div>
</div>
  )
}

export default Contact