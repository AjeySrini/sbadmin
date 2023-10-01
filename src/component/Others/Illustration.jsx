/* eslint-disable react/jsx-no-target-blank */
import './Progress.css'
import posting from '../../assets/posting_photo.svg'
const Illustrations = () => {

    return (
        <div className='card  shadow mb-4 ml-4'>
            <div className='card-header'>
                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "20rem" }} src={posting} alt="..." />
                </div>
                <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                    constantly updated collection of beautiful svg images that you can use
                    completely free and without attribution!</p>
                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                    unDraw →</a>
            </div>
        </div>
    )

}

export default Illustrations;