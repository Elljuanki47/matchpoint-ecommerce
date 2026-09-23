export type ProductType = 'Camisetas' | 'Shorts' | 'Medias' | 'Botines'

export type Product = {
    id: string
    name: string
    brand: string
    type: ProductType
    segment: 'Adulto' | 'Infantil'
    imageUrl: string
    description: string
    variants: ProductVariant[]
}

export type ProductVariant = {
    id: string
    size: string
    sizeAr?: string
    price: number
    stock: number
}