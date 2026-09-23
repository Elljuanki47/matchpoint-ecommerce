import type { Product } from '../types/product'
import { getLowestPrice } from '../utils/product'

type ProductCardProps = {
    product: Product
    onViewDetail: () => void
}

const priceFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
})

export function ProductCard({ product, onViewDetail }: ProductCardProps) {
    const lowestPrice = getLowestPrice(product)
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
                    {lowestPrice !== null
                        ? `Desde ${priceFormatter.format(lowestPrice)}`
                        : 'Sin variantes disponibles'}
                </p>
                <button
                    type="button"
                    className="detail-button"
                    onClick={onViewDetail}
                    aria-label={`Ver detalle de ${product.name}`}
                >
                    Ver producto
                </button>
            </div>
        </article>
    )
}