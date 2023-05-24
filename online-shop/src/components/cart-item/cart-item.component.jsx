import "./cart-item.style.scss";

const CartItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  console.log(CartItem);
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}* $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
