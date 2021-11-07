import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";
import {Container} from "react-bootstrap";
import './assets/scss/style.scss'
function App() {
    const products = ['buoi', 'cam', 'quyt'];

    let listProduct =products.map(value => {
        return (
            <Product product={value}/>
        )
    })


  return (
    <>
        {/*<Header/>*/}
        {/*<Container>*/}
        {/*    {listProduct}*/}
        {/*</Container>*/}
        <div className="container">


            <button className={'btn btn-primary'}>sgsgsg</button>
            <button className={'btn btn-outline-primary'}>sgsgsg</button>
        </div>
    </>
  );
}

export default App;
