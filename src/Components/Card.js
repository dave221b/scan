import './card.css';

export const Cardcomponent = ({image, title, body}) => {
    return(
           <div className='card'>
                <img src={image} alt='QR code'/>
                <div className='title'>{title}</div>
                <div className='body'>{body}</div>
            </div>
    )
}
