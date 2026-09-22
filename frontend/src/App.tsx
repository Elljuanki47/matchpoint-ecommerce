import { useState } from 'react'
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

          <p className="hero-descrtiption">
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
                onClick={() => setSelectedType(productType)}
              >
                {productType}
              </button>
            ))}
          </div>

          <div className="empty-state" role="status">
            <h3>
              {selectedType === 'Todos'
                ? 'Estamos preparando el catalogo'
                : `${selectedType}: proximamente`}
            </h3>
            <p>
              Todavia no hay productos disponibles para mostrar.
            </p>
          </div>
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
