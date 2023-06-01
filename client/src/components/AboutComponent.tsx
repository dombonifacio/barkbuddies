// images
import GroupDogTwo from '../assets/images/GroupDogTwo.png';
// import SmallBlob from '../assets/images/SmallBlob.png';
import BigBlob from '../assets/images/BigBlob.png';

import SmallBlob from '../assets/images/SmallBlob.png';




export const AboutComponent = () => {
    return (
        // Creates a container with a customized width
        <div className="lg:max-w-[1460px]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-16 items-center my-2 md:my-3 lg:my-6 ">
            {/* Group of dogs image */}
            <div className=' justify-self-end'>
                <img src={GroupDogTwo}
                
                
                alt="Group of Dogs"/>
               
            </div>



            {/* Text column */}
            <div className='text-start flex flex-col space-y-4 md:space-y-7 lg:space-y-10 p-4'>
                <div>

                    <p className='text-light md:text-xl text-web-purple'>ABOUT US</p>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-web-purple font-extrabold'>How We Grow Our Business</h1>
                    <p className='text-slate-500'>We are a dog adoption website dedicated to helping dogs find their forever homes. Our mission is to facilitate the adoption process by connecting potential adopters with dogs in need, and to promote responsible pet ownership. Our platform provides a safe and convenient way to search for adoptable dogs and learn about their backgrounds and personalities. We are committed to making a positive impact on the lives of both dogs and their adopters.</p>
                </div>
                <div className='flex space-x-10'>
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold from-slate-100 via-purple-800 to-web-purple bg-gradient-to-t bg-clip-text text-transparent'>568</h1>
                        <p className='md:text-xl font-semibold text-slate-600'>Saved</p>
                    </div>
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold from-slate-100 via-purple-800 to-web-purple bg-gradient-to-t bg-clip-text text-transparent'>465</h1>
                        <p className='md:text-xl font-semibold text-slate-600'>Adopted</p>
                    </div>
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold from-slate-100 via-purple-800 to-web-purple bg-gradient-to-t bg-clip-text text-transparent'>103</h1>
                        <p className='md:text-xl font-semibold text-slate-600'>Fostered</p>
                    </div>
                  
                    </div>
            </div>
        </div>
    )
}