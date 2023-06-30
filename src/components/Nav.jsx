/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Nav = () => {
  const cart = useSelector((state) => state.cart)
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" exact className="nav-link">หน้าหลัก</Link>
            </li>
            
          </ul>
          <div className="mb-2 mb-lg-0">
            <Link className="nav-link cover-naviconcart" to="/cart">
              <div className='in-naviconcart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                  <path d="M17.0307 7.33218C16.9969 6.9583 16.8249 6.61044 16.5485 6.35646C16.272 6.10248 15.9109 5.96061 15.5355 5.95851H14.1168V4.72928C13.8514 -1.57353 4.57187 -1.57932 4.30387 4.72928V5.95847H2.77677C2.4002 5.9565 2.03682 6.09699 1.75953 6.35177C1.48223 6.60654 1.31153 6.95676 1.28168 7.33214L0.00452082 22.3727C-0.0115054 22.5793 0.0151821 22.7871 0.0829224 22.983C0.150663 23.179 0.258006 23.3589 0.398271 23.5115C0.538535 23.6642 0.708718 23.7863 0.898227 23.8703C1.08774 23.9544 1.29252 23.9985 1.49982 24H16.8126C17.0204 24 17.2259 23.9569 17.4161 23.8734C17.6063 23.7899 17.7771 23.6677 17.9177 23.5147C18.0582 23.3618 18.1655 23.1812 18.2326 22.9846C18.2997 22.788 18.3253 22.5796 18.3077 22.3726L17.0307 7.33218ZM5.59004 4.72928C5.76968 0.135096 12.6519 0.136811 12.8306 4.72928V5.95843H5.59004V4.72928ZM16.9704 22.6444C16.9504 22.6663 16.9261 22.6839 16.8989 22.6958C16.8717 22.7078 16.8423 22.714 16.8126 22.7139H1.49982C1.47014 22.7139 1.44077 22.7078 1.41359 22.6958C1.38641 22.6839 1.36199 22.6665 1.3419 22.6446C1.3218 22.6228 1.30647 22.597 1.29685 22.5689C1.28724 22.5409 1.28356 22.5111 1.28606 22.4815L2.56322 7.44104C2.56807 7.38763 2.59262 7.33794 2.63209 7.30164C2.67157 7.26534 2.72314 7.24504 2.77677 7.24468H4.30387V8.77243C4.30387 8.94299 4.37163 9.10656 4.49223 9.22716C4.61283 9.34776 4.7764 9.41552 4.94696 9.41552C5.11751 9.41552 5.28109 9.34776 5.40169 9.22716C5.52229 9.10656 5.59004 8.94299 5.59004 8.77243V7.24468H12.8306V8.77243C12.8306 8.94299 12.8984 9.10656 13.019 9.22716C13.1396 9.34776 13.3031 9.41552 13.4737 9.41552C13.6442 9.41552 13.8078 9.34776 13.9284 9.22716C14.049 9.10656 14.1168 8.94299 14.1168 8.77243V7.24468H15.5355C15.5891 7.24499 15.6407 7.26528 15.6802 7.30158C15.7197 7.33788 15.7443 7.3876 15.7492 7.44104L17.0262 22.4815C17.0288 22.511 17.0253 22.5408 17.0157 22.5689C17.0061 22.5969 16.9906 22.6227 16.9704 22.6444Z" fill="black" />
                </svg>
                <label>{cart.reduce((sum, item) => sum + item.quantity, 0)}</label>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}
export default Nav
