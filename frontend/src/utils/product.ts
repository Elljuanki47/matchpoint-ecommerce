import type { Product } from '../types/product'

export function getLowestPrice(product: Product): number | null {
    if (product.variants.length === 0) {
        return null
    }

    return Math.min(...product.variants.map((variant) => variant.price))
}