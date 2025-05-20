import './image.css'
import photo from '../../asset/_0037.jpg'
function image(){
    return(
        <div className='myphoto'>
            <img src={photo} alt="" />
        </div>
    );
}

export default image;