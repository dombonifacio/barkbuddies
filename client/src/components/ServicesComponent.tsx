import { CardComponent } from "./CardComponent"
import { Title } from "../interface/Card"

// Icons
import HouseIcon from '../assets/images/HouseIcon.png'
// import StarIcon from '../assets/images/StarIcon.png'
// import ShieldIcon from '../assets/images/ShieldIcon.png'
// import HandcuffsIcon from '../assets/images/HandcuffsIcon.png'
// import HoldingHandsIcon from '../assets/images/HoldingHands.png'
import HandshakeIcon from '../assets/images/HandshakeIcon.png'


export const ServicesComponent = () => {
    return (
        <div className="linear-bg">
           <div className='lg:max-w-[1460px] mx-auto py-2 md:py-3 lg:py-6 '>
                {/* Introduction to the services section */}
                <div className="pb-12">
                    
                    <h1 className="text-5xl font-extrabold text-white text-center">Our Services</h1>
                    <p className="text-xl text-extralight text-slate-300">We provide any services that your dog may need.</p>
                </div>
                {/* Card Components */}
                <div className="grid grid-cols-2 items-center  lg:pb-6 bg-blue-500">

                    <CardComponent icon={HouseIcon} title={Title.Adopt}  description={"A dog adoption service is dedicated to providing safe and loving homes to new families looking to adopt a furry companion."}/>
                    <CardComponent icon={HandshakeIcon} title={Title.Foster}  description={"BarkBuddies provides exceptional dog fostering services, offering a safe and nurturing environment for dogs in need of temporary homes."}/>
                    {/* <CardComponent icon={HoldingHandsIcon} title={Title.Give}  description={"Looking for a loving home for your furry friend? BarkBuddies will bring endless joy and companionship to their new family."}/>
                    <CardComponent icon={ShieldIcon} title={Title.Service}  description={"BarkBuddies offers comprehensive service dog training to help dogs become highly skilled and reliable companions for those in need."}/>
                    <CardComponent icon={HandcuffsIcon} title={Title.Police}  description={"BarkBuddies specializes in police dog training, providing highly trained and effective K-9 units to law enforcement agencies to assist in keeping communities safe."}/>
                    <CardComponent icon={StarIcon} title={Title.Other}  description={"BarkBuddies offers a full range of services to cater to all your dog's needs."}/> */}

                </div>
                </div>
        </div>
           
    )
}