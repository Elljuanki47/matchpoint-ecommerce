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
            <div className="product-card-media">
                <img
                    className="product-card-image"
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    width={600}
                    height={450}
                />
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