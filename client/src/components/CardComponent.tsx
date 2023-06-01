import { Card } from '../interface/Card';

export const CardComponent = ({title, description, icon} : Card) => {
    return (
        
        <div className='flex flex-col space-y-3 max-w-xs p-10 max-h-xs bg-white text-start rounded-2xl'>
            <img src={icon}
           
            width={40}
            className='max-w-xs'/>
            <div className="text-4xl font-extrabold text-web-purple">{title}</div>
            <div className="text-slate-500 text-start">
            {description}
            </div>
           
        </div>
    )
}