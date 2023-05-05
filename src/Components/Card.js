import Card from 'react-bootstrap/Card';
import './card.css';

export const Cardcomponent = ({image, title, body}) => {
    return(
        <>
            {/* <Card style={{ width: '12rem'}}>
                <Card.Img variant='top' src={image} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
            </Card> */}
            <div className='card'>
                <img src={image} alt='QR code'/>
                <div className='title'>{title}</div>
                <div className='body'>{body}</div>
            </div>
        </>
    )
}