import { useState } from 'react'
import { getLowestPrice } from '../utils/product'
import type { Product } from '../types/product'

type ProductDetailProps = {
    product: Product
    onBack: () => void
}

const priceFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
})

export function ProductDetail({product, onBack}: ProductDetailProps) {
    const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
        null,
    )

    const selectedVariant = product.variants.find(
        (variant) => variant.id === selectedVariantId,
    )

    const lowestPrice = getLowestPrice(product)

    return (
        <div className="product-detail">
            <button type="button" className="back-button" onClick={onBack}>
                ← Volver al catalogo
            </button>

            <div className="product-detail-layout">
                <img
                    className="product-detail-image"
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={600}
                />

                <div className="product-detail-info">
                    <p className="product-card-brand">{product.brand}</p>
                    <h3 tabIndex={-1} autoFocus>
                        {product.name}
                    </h3>
                    <p>{product.segment}</p>
                    <p className="product-detail-description">
                        {product.description}
                    </p>

                    <p className="product-detail-price" aria-live="polite">
                        {selectedVariant
                           ? priceFormatter.format(selectedVariant.price)
                           : lowestPrice !== null
                             ? `Desde ${priceFormatter.format(lowestPrice)}`
                             : 'Sin variantes disponibles'}
                    </p>

                    <fieldset className="size-selector">
                        <legend>Elegi tu talle</legend>

                        <div className="size-options">
                            {product.variants.map((variant) => (
                                <button
                                    key={variant.id}
                                    type="button"
                                    className="size-option"
                                    disabled={variant.stock === 0}
                                    aria-pressed={selectedVariantId === variant.id}
                                    onClick={() => setSelectedVariantId(variant.id)}
                                >
                                    <span>{variant.size}</span>

                                    {variant.sizeAr && <small>{variant.sizeAr} AR</small>}

                                    {variant.stock === 0 && <small>Agotado</small>}
                                </button>
                            ))}
                        </div>
                    </fieldset>

                    <p className="variant-status" role="status">
                        {selectedVariant
                            ? `Talle ${selectedVariant.size} seleccionado · Stock de prueba: ${selectedVariant.stock}`
                            : 'Selecciona un talle disponible para ver su precio'
                        }
                    </p>
                </div>
            </div>
        </div>
    )     
}