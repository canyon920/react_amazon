import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout(){
  const [{basket}, dispatch] = useStateValue();
  console.log(basket)
  return (
    <div className="checkout">
        <div className="checkout_left" />
           <img className="checkout_ad"
                src=""
                alt="" />
          <div>
            <h2 className="checkout_title">
              장바구니 입니다. 
            </h2>
            {basket.map(item => (
                <CheckoutProduct id={item.id} title={item.title} price={item.price} image ={item.image} rating={item.rating} /> 
            ))}
          </div>
    </div>
      
    )
}

export default Checkout;