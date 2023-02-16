import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";

function Subtotal(){
  const [{basket}, dispatch ] = useStateValue();


  return (
    <div className="subTotal">
      <CurrencyFormat
      renderText={(value) => 
        (<>
          <p> 총액  ( {basket.length} items ) : <strong> {value} 원 </strong></p>
          <small className="subtotal_gift">
            <input type="checkbox" /> 체크 박스 입니다.
          </small>
        </>)}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"원"}
    />
      <button> 결제하기 </button>
    </div>
  )
}

export default Subtotal;