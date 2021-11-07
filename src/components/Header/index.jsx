import styles from './Header.module.scss';
import Product from "../Product";


function Header() {

    const products = ['1', '2', '3'];

    let listProduct =products.map(value => {
        return (
            <Product product={value}/>
        )
    })
    return (
        <header className={styles.header}>
            {listProduct}
        </header>
    )
}

export default Header;