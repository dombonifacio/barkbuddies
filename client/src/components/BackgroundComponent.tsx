import Background from '../assets/images/Background.png';

export const BackgroundComponent = () => {
    return (
        <div className='relative'>
            <div className='fixed'>

                <img src={Background}
                className='w-screen h-screen'
                alt='Background'/>
            </div>
        </div>
    )
}