import type { CartItem } from '../types/cart'

type CartProps = {
    items: CartItem[]
    onRemove: (variantId: string) => void
}

const priceFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
})

export function Cart({ items, onRemove }: CartProps) {
    const totalQuantity = items.reduce(
        (total, item) => total +  item.quantity,
        0,
    )

    const subtotal = items.reduce(
        (total, item) => total + item.variant.price * item.quantity,
        0,
    )

    return (
        <section className="cart" aria-labelledby="cart-title">
            <h2 id="cart-title">Tu carrito</h2>

            <p className="cart-summary" role="status">
                {totalQuantity} {totalQuantity === 1 ? 'unidad' : 'unidades'}
            </p>

            {items.length === 0 ? (
                <p className="cart-empty">Todavia no agregaste productos.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {items.map((item) => (
                            <li key={item.variant.id} className="cart-item">
                                <div className="cart-item-info">
                                    <h3>{item.product.name}</h3>
                                    <p>
                                        Talle {item.variant.size} · Cantidad: {item.quantity}
                                    </p>
                                    <p>
                                        Precio unitario: {' '}
                                        {priceFormatter.format(item.variant.price)}
                                    </p>
                                </div>

                                <div className="cart-item-action">
                                    <strong>
                                        {priceFormatter.format(
                                            item.variant.price * item.quantity,
                                        )}
                                    </strong>

                                    <button
                                        type="button"
                                        className="remove-button"
                                        onClick={() => onRemove(item.variant.id)}
                                        aria-label={`Quitar ${item.product.name}, talle ${item.variant.size}`}
                                    >
                                        Quitar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-total">
                        <span>Subtotal de productos</span>
                        <strong>{priceFormatter.format(subtotal)}</strong>
                    </div>

                    <p className="cart-note">
                        Envio no incluido. Agregar al carrito no reserva stock.
                    </p>
                </>
            )}
        </section>
    )
}