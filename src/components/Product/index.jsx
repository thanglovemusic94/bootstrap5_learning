import styles from './Product.module.scss'
function Product({product}) {
    return (
        <article className={styles.item}>
            {product}
        </article>
    )
}

export default Product