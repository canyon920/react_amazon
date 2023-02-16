import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function CheckoutProduct( {id, title, image, rating, price}){
    const [{basket},dispatch ] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
    }
    return (
      <div className="checkout-product">
        <img className="checkoutProduct_image" src={image} alt=""/>
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
              {title}
            </p>
            <p className="checkoutProduct_price">
              <small> 가격  </small>
              <strong> {price} </strong>
              <small> 원 </small>
            </p>
            
            <div className="checkoutProduct_rating">
                { Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>★</p>
                ))}
            </div>
            <div className="checkout_right">
              <Subtotal />
            </div>
            <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
        </div>
      </div>
  )
}
export default CheckoutProduct;