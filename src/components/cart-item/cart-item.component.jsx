import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <div className='item-deatils'>
            <span className='name'>{name}</span>
            <span className='price'>
            {quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;