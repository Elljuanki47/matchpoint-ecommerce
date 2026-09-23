import type { Product } from '../types/product'

export const products: Product [] = [
{
    id: 'demo-argentina-messi',
    name: 'Camiseta Argentina titular 2026 — Messi 10',
    brand: 'Adidas',
    type: 'Camisetas',
    segment: 'Adulto',
    imageUrl: '/images/products/camiseta-messi.webp',
    description:
      'Camiseta de demostración con nombre y número estampados. Modelo adulto.',
    variants: [
      { id: 'demo-camiseta-s', size: 'S', price: 120000, stock: 3 },
      { id: 'demo-camiseta-m', size: 'M', price: 120000, stock: 5 },
      { id: 'demo-camiseta-l', size: 'L', price: 125000, stock: 0 },
],
  },
  {
    id: 'demo-short-boca',
    name: 'Short Boca titular 2026',
    brand: 'Adidas',
    type: 'Shorts',
    segment: 'Adulto',
    imageUrl: '/images/products/short-boca.webp',
    description:
      'Short de demostración para completar tu equipo. Modelo adulto.',
    variants: [
      { id: 'demo-short-s', size: 'S', price: 65000, stock: 4 },
      { id: 'demo-short-m', size: 'M', price: 65000, stock: 2 },
      { id: 'demo-short-l', size: 'L', price: 65000, stock: 0 },
],
  },
  {
    id: 'demo-medias-boca',
    name: 'Medias Boca suplente 2026',
    brand: 'Adidas',
    type: 'Medias',
    segment: 'Adulto',
    imageUrl: '/images/products/medias-boca.webp',
    description:
      'Medias de demostración con talles expresados como rangos de calzado.',
    variants: [
      { id: 'demo-medias-3942', size: '39–42', price: 25000, stock: 6 },
      { id: 'demo-medias-4346', size: '43–46', price: 25000, stock: 3 },
    ],
  },
  {
    id: 'demo-botin',
    name: 'Botín de muestra — Negro',
    brand: 'Nike',
    type: 'Botines',
    segment: 'Adulto',
    imageUrl: '/images/products/botines.jpg',
    description:
      'Botines de demostración. Numeración ilustrativa para probar el selector.',
    variants: [
      { id: 'demo-botin-40', size: '40', price: 150000, stock: 2 },
      { id: 'demo-botin-41', size: '41', price: 155000, stock: 4 },
      { id: 'demo-botin-42', size: '42', price: 155000, stock: 0 },
],
  },
]