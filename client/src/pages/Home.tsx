// images

import Dog from '../assets/images/DogBlob.png';

// pages
import { AboutComponent } from '../components/AboutComponent';
import { ServicesComponent } from '../components/ServicesComponent';
import { FooterComponent } from '../components/FooterComponent';
import { Navbar } from '../components/NavbarComponent';
import { WaveComponent } from '../components/WaveComponent';


export const Home = () => {
    return (
        <div>
            <div className="linear-bg ">
                <Navbar />
                <div className="   lg:max-w-[1460px] mx-auto grid grid-cols-1  md:grid-cols-2 items-center justify-items-start md:justify-items-center py-6  ">

                    {/* Text Column */}
                    <div className='md:order-first text-start p-4'>
                        <h1 className='text-xl md:text-4xl lg:text-5xl font-semibold text-white'>Need a Loyal Buddy?</h1>
                        <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold'><span id="barkBuddies" className='text-4xl sm:text-4xl lg:text-6xl font-bold from-slate-100 via-purple-500 to-blue-400 bg-gradient-to-b bg-clip-text text-transparent'>BARKBUDDIES</span> is here!</h1>
                        <p className='text-xl md:text-2xl font-semibold text-white'>Consider adopting one of our dogs! Save a dog’s life!<br></br><span className='text-xl md:text-2xl lg:text-3xl font-bold text-violet-400'>BarkBuddies</span> helps all dogs to be rescued!</p>
                        <button className='p-2 px-4 md:p-3 md:px-5 mt-2 rounded-md bg-btn-purple hover:bg-web-purple text-white'>Adopt a Dog</button>
                    </div>

                    {/* Dog Image Column */}
                    <div className='order-first justify-self-center'>
                    
                            
                        <img src={Dog}
                        alt="Dog Main"
                        className=' md:h-[268px] lg:h-[468px] w-full object-cover '
                  
                        />
                    
                    </div>
                </div>

                {/* <div>
                    
                    <img src={Waves}
                    className='min-w-full max-h-[137px]'
                    alt='Waves Blob'/>
                </div> */}
                <WaveComponent />

            </div>
            <AboutComponent />
            <ServicesComponent />
            <FooterComponent />
           
        </div>
    )
}