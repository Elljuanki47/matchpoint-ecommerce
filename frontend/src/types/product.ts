export type ProductType = 'Camisetas' | 'Shorts' | 'Medias' | 'Botines'

export type Product = {
    id: string
    name: string
    brand: string
    type: ProductType
    segment: 'Adulto' | 'Infantil'
    priceFrom: number
}