import { Link } from 'react-router-dom'

const Thankyou = () => {
    return (
        <div className='cover-thankyou'>
            {/* <div><img src="" alt="" /></div> */}
            <div>
                <p className='font-thankyou'>Thank You!</p>
                <p className='info-thankyou'>click here to return to home page</p>
            </div>
            <div>
                <Link to="/">
                    <button class="btn btn-success"><label>Back to Home</label></button>
                </Link>
            </div>
        </div>
    )
}

export default Thankyou
