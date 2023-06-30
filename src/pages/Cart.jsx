import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../actions/cartActions'
import { checkoutCart } from '../actions/cartActions'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <Nav />
            </div>
            <div className='container'>
                <div className='header-cart'>
                    <label>Cart</label>
                </div>
                <div className='cover-cart'>
                    {cart.length === 0 ? <div className='cover-empty'><svg xmlns="http://www.w3.org/2000/svg" width="194" height="200" viewBox="0 0 97 100" fill="none">
                        <path d="M54.677 38.2657C60.1837 38.2657 65.6063 40.6693 70.2377 45.0973C71.4621 46.166 71.545 48.046 70.4261 49.2176C69.3021 50.3968 67.4235 50.3968 66.3058 49.2239C62.5258 45.6022 58.5549 43.9633 54.677 43.9633C50.8041 43.9633 46.8408 45.6022 43.0608 49.2239C42.5183 49.7614 41.7736 50.0553 41.0075 50.0352C38.457 49.9699 37.2652 46.8391 39.1364 45.0961C43.7603 40.6681 49.1753 38.2657 54.677 38.2657ZM66.5406 27.0225C68.8174 27.0225 70.6685 28.8773 70.6685 31.1566C70.6685 33.4371 68.8161 35.2844 66.5406 35.2844C64.2651 35.2844 62.4203 33.4371 62.4203 31.1566C62.4203 28.8773 64.2651 27.0225 66.5406 27.0225ZM42.8259 27.0225C45.1027 27.0225 46.9462 28.8773 46.9462 31.1566C46.9462 33.4371 45.1015 35.2844 42.8259 35.2844C40.5429 35.2844 38.6981 33.4371 38.6981 31.1566C38.6981 28.8773 40.5416 27.0225 42.8259 27.0225ZM4.66067 0C-0.892509 0.156976 -1.77534 8.53573 3.60077 9.99749L10.6132 12.4739L18.8614 55.4942C19.8472 60.643 21.4835 65.3008 23.764 69.3093C27.1195 75.2129 32.9477 79.5693 40.136 79.5693H75.8361C82.2772 79.686 82.2772 69.3746 75.8361 69.4927H40.1373C35.055 68.8447 32.9478 66.2841 31.0841 62.5292H78.2046C82.5283 62.5292 84.942 58.6902 86.0069 54.2497L96.3158 19.1749C96.8659 13.4095 93.8118 12.2705 88.467 12.2705L20.7714 12.322L18.9543 6.76001C18.4633 5.1036 17.2075 3.82519 15.6314 3.38064L4.66067 0Z" fill="black" />
                        <path d="M73.0118 84.7043C68.7986 84.7043 65.379 88.1314 65.379 92.3496C65.379 96.5741 68.7986 100 73.0118 100C77.2301 100 80.6496 96.5741 80.6496 92.3496C80.6496 88.1314 77.2301 84.7043 73.0118 84.7043ZM42.571 84.7043C38.3528 84.7043 34.9307 88.1314 34.9307 92.3496C34.9307 96.5741 38.3528 100 42.571 100C46.7893 100 50.2038 96.5741 50.2038 92.3496C50.2038 88.1314 46.7893 84.7043 42.571 84.7043Z" fill="black" />
                    </svg><label>Cart is Empty</label></div> : <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item =>
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.img} alt="" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteCart(item.id))}><button class="btn btn-danger">x</button></td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                    }

                </div>

                <div className='bottom-cart'>
                    <Link to="/">
                        <button class="btn btn-light">CONTINUE SHOPPING</button>
                    </Link>
                    {cart.length !== 0 ? <Link to="/Thankyou">
                        <button class="btn btn-success"
                            onClick={() => dispatch(checkoutCart())}>PROCEED TO CHECKOUT</button>
                    </Link> : <></>}


                </div>
            </div>
            <div>
                <Footer />
            </div>


        </>
    )
}

export default Cart
