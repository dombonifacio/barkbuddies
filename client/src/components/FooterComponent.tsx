// icons
import FacebookIcon from '../assets/images/FacebookIcon.png'
import GoogleIcon from '../assets/images/GoogleIcon.png'
import InstagramIcon from '../assets/images/InstagramIcon.png'
import YoutubeIcon from '../assets/images/YoutubeIcon.png'

import PhoneIcon from '../assets/images/PhoneIcon.png'
import LocationIcon from '../assets/images/LocationIcon.png'
import MailIcon from '../assets/images/MailIcon.png'

// logo
import Logo from '../assets/images/logo.png'

// interfaces
import { Footer } from '../interface/Footer'
import { Contact } from '../interface/Contact'

export const FooterComponent = () => {

    const footerLinks: Footer[] = [
        {
            title: "Quick Links", 
            contents: ["About", "FAQ", "Privacy Policy"]
        },
        {
            title: "Help",
            contents: ["Terms & Conditions", "Conduct",]
        }
    ]
    // creating an object Footer
    // const footerLinks: 
    // Footer = {
    // title: "Quick Links",
    // contents: ["About, FAQ", "Privacy Policy"]}


    const contact: Contact = {
    title: "Contact",
    address: "170 Spokane St Kimberley, British Columbia",
    phoneNumber: ["+63 234 353 568", "+63 123 456 789"],
    email: "barkbuddies@gmail.com",
    image: [PhoneIcon, LocationIcon, MailIcon]
    }
    

    return (
        <div className=' bg-light-black '>
            <div className='lg:max-w-[1460px] mx-auto p-4 lg:p-10'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:space-x-8">
                    {/* First Column with Logo */}
                  
                    <div>

                        <img src={Logo}
                        alt="Dog"
                        />
                        <p className='text-slate-200'>
                        Here at our adoption website, we strive to make the adoption process as seamless as possible for potential adopters. Don't hesitate to contact us if you have any questions or need assistance in finding your new furry companion. We're here to help!
                        </p>

                        {/* Icons */}
                        <div className="flex items-center justify-items-stretch mt-5 ">
                            <div className="facebook flex-grow">
                                
                                <img src={FacebookIcon}
                                alt='facebook' />
                            </div>
                            <div className="google flex-grow">
                            <img src={GoogleIcon}
                            alt='google' />
                            </div>
                            <div className="instagram flex-grow">
                                 
                            <img src={InstagramIcon}
                            alt='instagram' />
                            </div>
                            <div className="youtube flex-grow">

                                <img src={YoutubeIcon}
                                alt='youtube' />
                            </div>
                          
                        </div>
                        
                    </div>
                    
                    {/* This flex col holds the entire div of the Help and Quick Links */}
                    <div className='flex flex-col md:items-center lg:items-end  justify-items-stretch'>
                        {/* this div holds each section of the footerLinks. Help and Quick Links */}
                        <div className='space-y-5 lg:space-y-8'>

                            {footerLinks.map((val) => (
                                <div className='flex'>

                                    <div key={val.title}>
                                      
                                        <h1 className='text-2xl text-white font-extrabold'>{val.title}</h1>
                                        <ul className='space-y-2'>
                                            {val.contents.map((content) => (
                                                <li key={content} className='text-gray-400'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        
                        </div>
                    </div>
                    
                    {/* Contact section */}
                    <div className='lg:w-60 lg:mx-auto'>
                       
                        
                        <h1 className='text-2xl text-white font-extrabold'>{contact.title}</h1>
                       
                        <div className='flex space-x-2'>
                            <img src={contact.image[1]}
                            alt="Location Icon"
                            className='object-contain' />
                            <p className='text-gray-400'>{contact.address}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <img src={contact.image[0]}
                            alt="Phone Icon"
                            className='object-contain' />
                            <ul>
                               {contact.phoneNumber.map((number) => (
                                    <li className='text-gray-400'>{number}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex space-x-2'>
                            <img src={contact.image[2]}
                            alt="Mail Icon"
                            className='object-contain' />
                            <p className="text-gray-400">{contact.email}</p>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}