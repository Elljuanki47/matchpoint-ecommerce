import type { Product, ProductVariant } from './product'

export type CartItem = {
    product: Product
    variant: ProductVariant
    quantity: number
}