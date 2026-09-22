import type { Product } from '../types/product'

export const products: Product [] = [
{
    id: 'demo-argentina-messi',
    name: 'Camiseta Argentina titular 2026 — Messi 10',
    brand: 'Adidas',
    type: 'Camisetas',
    segment: 'Adulto',
    priceFrom: 120000,
    imageUrl: '/images/products/camiseta-messi.webp',
  },
  {
    id: 'demo-short-boca',
    name: 'Short Boca titular 2026',
    brand: 'Adidas',
    type: 'Shorts',
    segment: 'Adulto',
    priceFrom: 65000,
    imageUrl: '/images/products/short-boca.webp',
  },
  {
    id: 'demo-medias-boca',
    name: 'Medias Boca suplente 2026',
    brand: 'Adidas',
    type: 'Medias',
    segment: 'Adulto',
    priceFrom: 25000,
    imageUrl: '/images/products/medias-boca.webp',
  },
  {
    id: 'demo-botin',
    name: 'Botín de muestra — Negro',
    brand: 'Nike',
    type: 'Botines',
    segment: 'Adulto',
    priceFrom: 150000,
    imageUrl: '/images/products/botines.jpg',
  },
]