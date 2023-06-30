/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react"
import { products } from '../data/products'
import Item from '../components/Item'
import Nav from '../components/Nav'
import Footer from "../components/Footer"

const Product = () => {

    const [btnState, setBtnState] = useState('');

    const [productData, setProductData] = useState([])

    useEffect(() => {
        setProductData(products);
        setBtnState('all')
    }, []);

    const filterWithtype = (filter_type) => {

        let new_data
        if (filter_type === 'all') {
            new_data = products
        }
        else {
            new_data = products.filter(item => item.type === filter_type)
        }
        setBtnState(filter_type)
        setProductData(new_data)
    }


    return (
        <>
            <div>
                <Nav />
            </div>
            <div>
                <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="http://plazathemes.com/demo/grand/pub/media/Plazathemes/bannerslider/images/s/l/slider1-grand1.jpg" class="d-block w-100" alt="" />
                            <div className='banner-caption'>
                                <div className='container'>
                                    <div className='banner-caption-inner'>
                                        <div className='banner-caption-in-inner'>
                                            <h1>Chair Hello</h1>
                                            <h3>Lorem ipsum dolor sit</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <img src="http://plazathemes.com/demo/grand/pub/media/Plazathemes/bannerslider/images/s/l/slider2-grand1.jpg" class="d-block w-100" />
                            <div className='banner-caption'>
                                <div className='container'>
                                    <div className='banner-caption-inner'>
                                        <div className='banner-caption-in-inner'>
                                            <h1>Chair Hello</h1>
                                            <h3>Lorem ipsum dolor sit</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container cover-whychoose">
                    <div className="row justify-con-spacebw">
                        <div className="col-6">
                            <p className="text-size-32 text-medium">Why Choose Us</p>
                            <p className="text-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio minus laborum non sed ad aperiam, nihil, dolore magnam ipsa rerum vero minima, blanditiis repellendus dolor voluptas error autem. Aspernatur?</p>
                            <div className="row all-content">
                                <div className="col-6">
                                    <div className="content">
                                        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                            <path d="M31.6591 35.3637C33.6046 35.3637 35.1818 33.7865 35.1818 31.841C35.1818 29.8954 33.6046 28.3182 31.6591 28.3182C29.7135 28.3182 28.1364 29.8954 28.1364 31.841C28.1364 33.7865 29.7135 35.3637 31.6591 35.3637Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3409 35.3637C15.2865 35.3637 16.8636 33.7865 16.8636 31.841C16.8636 29.8954 15.2865 28.3182 13.3409 28.3182C11.3954 28.3182 9.81818 29.8954 9.81818 31.841C9.81818 33.7865 11.3954 35.3637 13.3409 35.3637Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M28.1364 17.0454H33.7727L38 21.2727V28.3181H28.1364V17.0454Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M28.1364 10H7V28.3182H28.1364V10Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        </div>
                                        <p className="text-size-16 text-medium">Fast & Free Shipping</p>
                                        <p className="text-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="content">
                                        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                            <path d="M14.2 9L10 14.6V34.2C10 34.9426 10.295 35.6548 10.8201 36.1799C11.3452 36.705 12.0574 37 12.8 37H32.4C33.1426 37 33.8548 36.705 34.3799 36.1799C34.905 35.6548 35.2 34.9426 35.2 34.2V14.6L31 9H14.2Z" stroke="black" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M28.2 20.2C28.2 21.6852 27.61 23.1095 26.5598 24.1597C25.5096 25.21 24.0852 25.8 22.6 25.8C21.1148 25.8 19.6904 25.21 18.6402 24.1597C17.59 23.1095 17 21.6852 17 20.2" stroke="black" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 14.6H35.2" stroke="black" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></div>
                                        <p className="text-size-16 text-medium">Easy to Shop</p>
                                        <p className="text-size-14  ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="content">
                                        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                            <path d="M22.5 37C29.9558 37 36 30.9558 36 23.5C36 16.0442 29.9558 10 22.5 10C15.0442 10 9 16.0442 9 23.5C9 30.9558 15.0442 37 22.5 37Z" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22.5 28.9C25.4823 28.9 27.9 26.4823 27.9 23.5C27.9 20.5176 25.4823 18.1 22.5 18.1C19.5177 18.1 17.1 20.5176 17.1 23.5C17.1 26.4823 19.5177 28.9 22.5 28.9Z" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M26.3205 27.3204L32.0445 33.0444" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.9555 33.0444L18.6795 27.3204" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M26.3205 19.6796L32.0445 13.9556" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M26.3205 19.6796L31.086 14.9141" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.9555 13.9556L18.6795 19.6796" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></div>
                                        <p className="text-size-16 text-medium">24/7 Support</p>
                                        <p className="text-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="content">
                                        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                            <path d="M16.3333 37.3333L11 32L16.3333 26.6666" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M35 23.9999V26.6665C35 28.081 34.4381 29.4376 33.4379 30.4378C32.4377 31.438 31.0812 31.9999 29.6667 31.9999H11" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M29.6667 7.99988L35 13.3332L29.6667 18.6665" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 21.3333V18.6666C11 17.2521 11.5619 15.8955 12.5621 14.8953C13.5623 13.8952 14.9188 13.3333 16.3333 13.3333H35" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></div>
                                        <p className="text-size-16 text-medium">Hassle Free Returns</p>
                                        <p className="text-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-5">
                            <div className="img-whychoose">
                                <img src="https://www.ikea.com/th/en/images/products/oestanoe-chair-black-remmarn-dark-grey__1186081_pe898673_s5.jpg?f=xl" alt="" />
                            </div>
                        </div>

                    </div>
                </div>


                <div className='container cover-products'>
                    <div className="cover-filter">
                        <div className='card-filter'>
                            <div onClick={() => filterWithtype('all')} className={`btn-filter ${btnState === "all" ? "active" : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="50" viewBox="0 0 48 50" fill="none">
                                    <path d="M47.1143 41.4799C46.41 40.6191 45.0797 40.5409 44.2971 41.2452C43.6711 41.7147 42.9668 42.1842 42.2625 42.6538L39.4453 33.1849H42.1842C44.4536 33.1849 46.2535 31.385 46.2535 29.1156C46.2535 26.8462 44.4536 25.0463 42.1842 25.0463H37.0194L33.9674 14.7949L36.6281 14.4036C37.4889 14.3254 38.1149 13.6211 38.1149 12.7602C38.1149 12.682 38.1149 12.6037 38.1149 12.5255C37.9584 11.5864 37.0976 10.9604 36.1586 11.0386L16.2817 13.6993C15.4209 13.7776 14.7949 14.4819 14.7949 15.3427C14.7949 15.4209 14.7949 15.4992 14.7949 15.6557C14.9514 16.5948 15.8122 17.2208 16.7513 17.1425L20.4293 16.673L17.9251 25.1246H14.2471L7.90842 2.97834C7.36064 0.787197 5.09124 -0.464887 2.97834 0.161155C0.787197 0.787197 -0.464887 2.97834 0.161155 5.16949L7.28238 30.0547C7.83017 31.9328 9.55179 33.1849 11.4299 33.1849H15.5774L12.6037 43.1233C11.4299 42.5755 10.4126 41.8712 9.55179 41.1669C8.69098 40.4626 7.43889 40.5409 6.7346 41.4017C6.0303 42.2625 6.10855 43.5146 6.96936 44.2189C16.1252 51.9661 37.7237 51.8879 46.8795 44.2189C47.7403 43.5928 47.8186 42.3407 47.1143 41.4799ZM25.6724 15.8905L29.2721 15.4209L32.7936 25.0463H22.3074L25.6724 15.8905ZM15.2644 44.2189L19.3337 33.1849H35.689L39.6018 43.8276C32.5588 46.6448 22.6987 46.8013 15.2644 44.2189Z" fill="black" />
                                </svg>
                                <label>All Chair</label>
                            </div>
                        </div>
                        <div className='card-filter'>
                            <div onClick={() => filterWithtype('Chair')} className={`btn-filter ${btnState === "Chair" ? "active" : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="50" viewBox="0 0 32 50" fill="none">
                                    <path d="M31.0814 0.0100004C21.3197 1.49379 11.2455 1.41569 0.859034 0.0100004C0.39047 -0.0680936 0 0.322376 0 0.79094V6.02324C0 6.4918 0.39047 6.96037 0.859034 7.11655C1.17141 7.19465 1.48379 7.27274 1.79616 7.35083L6.01324 27.1086H4.68564C3.9047 27.1086 3.27995 27.7334 3.27995 28.5143V31.2476C3.27995 32.0285 3.9047 32.6533 4.68564 32.6533H5.2323L2.49901 48.5845C2.34282 49.2092 2.73329 49.834 3.43613 49.9901C4.13898 50.0682 4.76373 49.6778 4.84183 48.9749L7.65321 32.5752H9.37128L7.65321 42.6493C7.57512 43.2741 7.96559 43.8207 8.59034 43.8988C9.21509 43.9769 9.76175 43.5864 9.83984 43.0398L11.636 32.5752H19.8359L21.632 43.0398C21.7101 43.6645 22.3349 44.055 22.8815 43.8988C23.5063 43.8207 23.8968 43.196 23.8187 42.6493L22.1006 32.5752H23.8187L26.63 48.9749C26.7081 49.5997 27.411 50.0682 28.0357 49.9901C28.6605 49.9121 29.1291 49.2092 29.051 48.5845L26.3177 32.6533H26.8643C27.6453 32.6533 28.27 32.0285 28.27 31.2476V28.5143C28.27 27.7334 27.6453 27.1086 26.8643 27.1086H25.4586L29.6757 7.42893C30.1443 7.27274 30.6128 7.19465 31.0814 7.03846C31.55 6.88227 31.9404 6.41371 31.9404 5.94514V0.79094C32.0185 0.322376 31.55 -0.0680936 31.0814 0.0100004ZM14.6036 9.0689V27.1086H12.495L10.5427 8.83462C11.8703 8.91271 13.276 8.99081 14.6036 9.0689ZM16.8683 27.0305V9.0689C18.274 9.0689 19.6016 8.99081 21.0073 8.83462L19.0549 27.0305H16.8683ZM4.21707 7.8194C5.54467 8.13177 6.87227 8.36606 8.19987 8.52224L10.2303 27.0305H8.35606L4.21707 7.8194ZM23.1939 27.0305H21.3197L23.3501 8.60034C24.6777 8.44415 26.0053 8.20987 27.3329 7.97559L23.1939 27.0305Z" fill="black" />
                                </svg>
                                <label>Chair</label>
                            </div>
                        </div>
                        <div className='card-filter'>
                            <div onClick={() => filterWithtype('Sofa')} className={`btn-filter ${btnState === "Sofa" ? "active" : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="50" viewBox="0 0 92 58" fill="none">
                                    <g filter="url(#filter0_d_114_39)">
                                        <path d="M17.4245 18.9848L22.3259 31.8919H69.7609L74.4308 22.552C74.9751 21.4592 75.8146 20.5407 76.8541 19.9006C77.8937 19.2605 79.0918 18.9244 80.3126 18.9304H80.7619C78.6107 10.7613 68.7806 8.78712 61.197 10.4345C57.1124 11.3059 53.2458 12.8717 49.4744 10.2167C46.057 7.80684 43.6335 4.28053 39.7396 2.49695C34.8196 0.312721 29.3891 -0.460366 24.055 0.264077C12.3188 1.84343 10.5897 10.1078 10.5761 14.805C10.8075 14.805 11.0254 14.805 11.2568 14.805C12.5853 14.8037 13.8835 15.2014 14.9832 15.9467C16.083 16.692 16.9334 17.7504 17.4245 18.9848Z" fill="black" />
                                        <path d="M87.7736 26.6774C87.7754 25.8716 87.6183 25.0735 87.3112 24.3285C87.0041 23.5836 86.5531 22.9066 85.984 22.3363C85.4149 21.7659 84.7388 21.3134 83.9946 21.0046C83.2504 20.6959 82.4526 20.5369 81.6468 20.5369C80.4541 20.5395 79.2888 20.8947 78.2975 21.5581C77.4546 21.9787 76.7712 22.6621 76.3506 23.505L71.0679 34.0159H20.8555L16.0493 21.3266C15.8875 20.4738 15.5439 19.6658 15.0418 18.9576C14.8532 18.6594 14.6292 18.3851 14.3747 18.1407L14.2521 18.0318C14.1074 17.8935 13.9527 17.7661 13.7892 17.6505C13.0482 17.0876 12.1883 16.7017 11.2751 16.5224C10.362 16.3431 9.41998 16.375 8.52111 16.6158C7.62225 16.8566 6.7904 17.2999 6.08925 17.9117C5.38809 18.5236 4.83622 19.2877 4.47588 20.1457C4.11553 21.0036 3.95627 21.9327 4.01028 22.8616C4.0643 23.7906 4.33015 24.695 4.7875 25.5054C5.24484 26.3158 5.88156 27.0108 6.64889 27.5373C7.41623 28.0637 8.29384 28.4076 9.21456 28.5426L13.5986 40.1154C13.9234 40.9606 14.4966 41.6876 15.2428 42.2004C15.989 42.7132 16.873 42.9879 17.7784 42.9882H21.7541L18.9357 50H21.0597L26.5057 42.9882H65.159L70.605 50H72.729L69.897 42.9882H73.8726C74.701 42.9893 75.5132 42.7591 76.2179 42.3238C76.9227 41.8884 77.492 41.2651 77.8618 40.5239L81.7285 32.845C83.3464 32.8235 84.89 32.1629 86.0225 31.0074C87.1551 29.8519 87.7846 28.2953 87.7736 26.6774Z" fill="black" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_114_39" x="0" y="0" width="91.7737" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_39" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_39" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <label>Sofa</label>
                            </div>
                        </div>

                        <div className='card-filter'>
                            <div onClick={() => filterWithtype('Armchair')} className={`btn-filter ${btnState === "Armchair" ? "active" : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                                    <path d="M8.03272 44.5901H5.84692V49.9999H8.03272V44.5901Z" fill="black" />
                                    <path d="M44.4263 44.5901H42.2405V49.9999H44.4263V44.5901Z" fill="black" />
                                    <path d="M42.0219 7.9235V16.5027C41.9672 16.5027 41.9126 16.5574 41.8579 16.612C41.8033 16.6667 41.7486 16.6667 41.6394 16.7213C41.5301 16.776 41.4754 16.8306 41.3661 16.8852C41.3115 16.9399 41.2568 16.9399 41.2022 16.9945C41.0929 17.0492 41.0383 17.1038 40.929 17.2131C40.8743 17.2678 40.8197 17.2678 40.765 17.3224C40.6558 17.4317 40.5465 17.4863 40.4372 17.5956C40.3825 17.6503 40.3825 17.6503 40.3279 17.7049C40.2186 17.8142 40.0547 17.9235 39.9454 18.0874C39.8907 18.1421 39.8907 18.1421 39.8361 18.1967C39.7268 18.306 39.6721 18.4153 39.5629 18.4699C39.5082 18.5246 39.4536 18.5792 39.4536 18.6339C39.3989 18.7432 39.3443 18.7978 39.235 18.9071C39.1803 18.9617 39.1803 19.0164 39.1257 19.071C39.0711 19.1803 39.0164 19.235 38.9618 19.3443L38.8525 19.5628C38.7978 19.6721 38.7432 19.7268 38.6885 19.8361C38.6339 19.8907 38.6339 20 38.5793 20.0546C38.5246 20.1639 38.47 20.2186 38.47 20.3279C38.4153 20.3825 38.4153 20.4918 38.3607 20.5465C38.306 20.6557 38.306 20.7104 38.2514 20.8197C38.2514 20.8743 38.1967 20.9836 38.1967 21.0383C38.1967 21.1475 38.1421 21.2568 38.0874 21.3115C38.0874 21.3661 38.0328 21.4754 38.0328 21.5301C38.0328 21.6393 37.9782 21.7486 37.9782 21.8579C37.9782 21.9126 37.9782 22.0219 37.9235 22.0765C37.9235 22.1858 37.8689 22.2951 37.8689 22.459C37.8689 22.5137 37.8689 22.5683 37.8689 22.623C37.8689 22.7869 37.8689 23.0055 37.8689 23.1694V24.8087H12.3497V23.1694C12.3497 23.0055 12.3497 22.7869 12.3497 22.623C12.3497 22.5683 12.3497 22.5137 12.3497 22.459C12.3497 22.3497 12.3497 22.1858 12.2951 22.0765C12.2951 22.0219 12.2951 21.9126 12.2405 21.8579C12.2405 21.7486 12.1858 21.6393 12.1858 21.5301C12.1858 21.4754 12.1312 21.3661 12.1312 21.3115C12.1312 21.2022 12.0765 21.0929 12.0219 21.0383C12.0219 20.9836 11.9672 20.8743 11.9672 20.8197C11.9126 20.7104 11.9126 20.6557 11.8579 20.5465C11.8033 20.4918 11.8033 20.3825 11.7487 20.3279C11.694 20.2186 11.6394 20.1639 11.6394 20.0546C11.5847 20 11.5847 19.8907 11.5301 19.8361C11.4754 19.6175 11.4754 19.5628 11.4208 19.4536C11.3661 19.3989 11.3115 19.2896 11.3115 19.235C11.2568 19.1803 11.2022 19.071 11.1476 19.0164C11.0929 18.9617 11.0383 18.8525 10.9836 18.7978C10.929 18.7432 10.8743 18.6339 10.8197 18.5792C10.765 18.5246 10.7104 18.4153 10.6558 18.3607C10.6011 18.306 10.5465 18.2514 10.4918 18.1967C10.4372 18.1421 10.3825 18.0328 10.3279 17.9781L10.2186 17.8689C10.0547 17.7049 9.89073 17.541 9.72679 17.4317C9.67215 17.377 9.61751 17.3224 9.56286 17.2678C9.50822 17.2131 9.39893 17.1585 9.34428 17.1038C9.28964 17.0492 9.23499 16.9945 9.1257 16.9399C9.07106 16.8852 8.96177 16.8306 8.90712 16.776C8.85248 16.7213 8.74319 16.6667 8.68854 16.6667C8.6339 16.6667 8.52461 16.5574 8.46996 16.5574C8.41532 16.5027 8.36068 16.5027 8.30603 16.4481V7.9235C8.30603 3.55191 11.8579 0 16.1749 0H34.2623C38.5246 0.0546448 42.0219 3.60656 42.0219 7.9235Z" fill="black" />
                                    <path d="M37.9235 26.8853H12.3497V33.388H37.9235V26.8853Z" fill="black" />
                                    <path d="M50.2732 23.0601C50.2732 25.082 49.071 26.8853 47.2678 27.7049L46.612 27.9782V42.4044H3.6612V27.9782L3.00546 27.7049C1.14754 26.8853 0 25.082 0 23.0601C0 20.2732 2.29508 17.9781 5.08197 17.9781C5.68306 17.9781 6.22951 18.0874 6.77596 18.2514C8.79782 18.9618 10.1639 20.8743 10.1639 23.0601V35.5738H40.1093V23.0601C40.1093 22.8962 40.1093 22.7869 40.1093 22.6776C40.1093 22.5137 40.1093 22.4044 40.1639 22.2404C40.4372 20.4372 41.7486 18.9071 43.4973 18.306C44.0437 18.0874 44.5902 18.0328 45.1913 18.0328C47.9781 17.9782 50.2732 20.2732 50.2732 23.0601Z" fill="black" />
                                </svg>
                                <label>Arm Chair</label>
                            </div>
                        </div>
                        <div className='card-filter'>
                            <div onClick={() => filterWithtype('Officechair')} className={`btn-filter ${btnState === "Officechair" ? "active" : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="50" viewBox="0 0 33 50" fill="none">
                                    <path d="M31.6155 21.3252C31.1519 21.3252 30.7765 21.7006 30.7765 22.1642V31.2547C30.7765 32.0119 30.1598 32.6286 29.4026 32.6286H28.033C28.033 32.595 28.033 32.5615 28.033 32.5279V31.9595C28.0288 30.6045 27.4289 29.9962 26.0823 29.9962H16.996V27.431H18.9634C18.9739 27.431 18.9802 27.4268 18.9907 27.4247C19.2298 27.4226 19.471 27.4226 19.7122 27.4121C20.0122 27.3995 20.3142 27.3953 20.6183 27.3911C21.5496 27.3744 22.5145 27.3597 23.4604 27.1352C26.8773 26.3193 29.2202 22.9591 28.9139 19.3305C28.9139 19.3305 28.4105 12.2997 28.1399 8.78639L28.0938 7.98935C28.0393 6.9364 27.9805 5.84571 27.5464 4.75501C26.4032 1.87516 23.6849 0.0104874 20.6246 0.00209748L19.1354 0L16.1612 0.00209748L13.1869 0L11.6977 0.00209748C8.63118 0.00838995 5.91493 1.87306 4.77179 4.75292C4.33552 5.84571 4.27888 6.9385 4.22435 7.99354L4.17611 8.78639C3.90553 12.2955 3.40423 19.3137 3.40423 19.32C3.0959 22.9591 5.43879 26.3193 8.85561 27.1373C9.80158 27.3618 10.7664 27.3765 11.6998 27.3932C12.0039 27.3974 12.306 27.4016 12.6059 27.4142C12.9478 27.4289 13.2876 27.4331 13.6295 27.4331L14.1707 27.4289C14.1769 27.4289 14.1811 27.4331 14.1874 27.4331H15.318V29.9983H6.15823C4.92701 30.0025 4.29776 30.6297 4.28518 31.863C4.28308 32.0832 4.28308 32.3538 4.28308 32.6307H3.05395C2.29675 32.6307 1.67799 32.014 1.67799 31.2568V22.1663C1.67799 21.7027 1.30254 21.3273 0.838997 21.3273C0.375451 21.3273 0 21.7027 0 22.1663V31.2568C0 32.9411 1.36966 34.3108 3.05395 34.3108H4.30405C4.40893 36.8592 6.05336 37.1634 6.7728 37.1675C7.66004 37.1717 8.54518 37.1696 9.43032 37.1696H15.318V42.3484C12.8933 42.5917 10.5839 43.8523 8.53469 46.0232C8.34592 45.9833 8.16973 45.933 7.9411 45.933C7.31815 45.9456 6.82104 46.1406 6.47076 46.514C6.12677 46.881 5.95688 47.3844 5.96946 48.0095C5.99253 49.2554 6.75183 50 7.99354 50C7.99564 50 8.01661 50 8.01661 50C9.27511 49.9916 10.0302 49.2386 10.0365 47.978C10.0386 47.6298 9.97357 47.3299 9.8645 47.0635C11.8089 45.0478 13.9735 43.9802 16.1989 43.9802C16.2031 43.9802 16.2094 43.9802 16.2136 43.9802C18.3635 43.9844 20.4317 44.9828 22.2712 46.8559C22.0845 47.1768 21.9586 47.548 21.967 48.0095C21.9943 49.2575 22.7515 50 23.9953 50C23.9953 50 24.0163 50 24.0184 50C25.2769 49.9916 26.0299 49.2386 26.0383 47.978C26.0404 47.3446 25.86 46.8412 25.4971 46.4783C25.1384 46.1154 24.6371 45.9309 23.9429 45.9309H23.9408C23.8695 45.933 23.817 45.9602 23.7499 45.9665C21.751 43.8313 19.4123 42.5665 17.0002 42.34V37.1655H25.4971C26.227 37.1655 27.8903 36.8634 28.0141 34.3087H29.4047C31.089 34.3087 32.4587 32.939 32.4587 31.2547V22.1642C32.4545 21.7006 32.0769 21.3252 31.6155 21.3252ZM7.99144 48.5968C7.99354 48.5968 7.99773 48.5989 7.99983 48.5989L7.99144 49.1568V48.5968ZM23.9932 48.4688C23.9974 48.4688 23.9995 48.4688 24.0037 48.4688L23.9932 49.1589V48.4688Z" fill="black" />
                                </svg>
                                <label>Office Chair</label>
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        {productData.map(prod => <Item key={prod.id} product={prod} />)}
                    </div>
                </div>


            </div>
            <div>
                <Footer />
            </div>




        </>

    )
}

export default Product
