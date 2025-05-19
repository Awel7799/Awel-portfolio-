import './image.css'
import photo from '../../asset/_0037-removebg-preview (1).png'
function image(){
    return(
        <div className='myphoto'>
            <img src={photo} alt="" />
        </div>
    );
}

export default image;