import { Routes ,Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Thankyou from './pages/Thankyou';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact={true} Component={Product} />
          <Route path="/Cart" exact={true} Component={Cart} />
          <Route path="/Thankyou" exact={true} Component={Thankyou} />
        </Routes>
    </div>
  );
}

export default App;
