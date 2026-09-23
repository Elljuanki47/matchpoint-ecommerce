import { useState } from 'react'
import { ProductCard } from './components/ProductCard'
import { products } from './data/products'
import { ProductDetail } from './components/ProductDetail'
import './App.css'

const productTypes = [
  'Todos',
  'Camisetas',
  'Shorts',
  'Medias',
  'Botines',
] as const

type ProductType = (typeof productTypes)[number]

function App() {
  const [selectedType, setSelectedType] = useState<ProductType>('Todos')
  const filteredProducts = products.filter((product) => {
    return selectedType === 'Todos' || product.type === selectedType
  });
  const [selectedProductId, setSelectedProductId] = useState<string | null> (
    null,
  )

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId,
  )

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="MATCHPOINT, inicio">
          MATCH<span>POINT</span>
        </a>

        <nav aria-label="Navegacion principal">
          <a href="#catalogo">Futbol</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">MATCHPOINT / FUTBOL</p>

          <h1 id="hero-title">
            Tu equipo.
            <br />
            Tu proxima jugada.
          </h1>

          <p className="hero-description">
            Camisetas, shorts, medias y botines para vivir el futbol dentro y fuera de la cancha.
          </p>

          <a className="primary-link" href="#catalogo">
            Explorar catalogo <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section 
          id="catalogo"
          className="catalog"
          aria-labelledby="catalog-title"
        >
          <div className="catalog-heading">
            <div>
              <p className="eyebrow">ENCONTRA LO TUYO</p>
              <h2 id="catalog-title">Futbol</h2>
            </div>
          </div>

          <div className="filters" role="group" aria-label="Tipo de Producto">
            {productTypes.map((productType) => (
              <button
                key={productType}
                type="button"
                className="filter-button"
                aria-pressed={selectedType === productType}
                onClick={() => {
                  setSelectedType(productType)
                  setSelectedProductId(null)
                }}
              >
                {productType}
              </button>
            ))}
          </div>

            <p className="catalog-notice">
              Catálogo de demostración · Productos y precios de ejemplo.
            </p>

            <p className="catalog-count" role="status">
              {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'producto' : 'productos'}
            </p>

            {selectedProduct ? (
              <ProductDetail
                key={selectedProduct.id}
                product={selectedProduct}
                onBack={() => setSelectedProductId(null)}
              />
            ) : filteredProducts.length > 0 ? (
              <div className="product.grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetail={() => setSelectedProductId(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No encontramos productos</h3>
                <p>Proba seleccionar otro tipo de producto.</p>
              </div>
            )}
        </section>
      </main>

      <footer className="site-footer">
        <span>MATCHPOINT</span>
        <span>El deporte nos encuentra.</span>
      </footer>
    </>
  )
}

export default App
