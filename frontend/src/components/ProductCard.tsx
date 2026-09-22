import type { Product } from '../types/product'

type ProductCardProps = {
    product: Product
}

const priceFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
})

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="product-card-placeholder">
                <span>{product.type}</span>
                <small>Imagen proximamente</small>
            </div>

            <div className="product-card-content">
                <p className="product-card-brand">{product.brand}</p>
                <h3>{product.name}</h3>
                <p className="product-card-segement">{product.segment}</p>
                <p className="Product-card-price">
                    Desde {priceFormatter.format(product.priceFrom)}
                </p>
            </div>
        </article>
    )
}