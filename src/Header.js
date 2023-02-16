import './Header.css'
import SearchIcon from "@mui/icons-material/Search"
import { ShoppingBasket, ShoppingBasketSharp } from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

 function Header(){
  const [{basket}, dispatch] = useStateValue();

  
    return(
      <div className="header">
        <img className="header_logo" src="https://pngimg.com" alt=""/>


        <div className="header_search">
          <input className="header_searchInput" type="text"/>
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_option">
          <span className="header_optionLIneOne"> 안녕하세요. </span>
          <Link to="/login" className="homelogin">
            <span className="header_optionLIneTwo"> 로그인 하기  </span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionLIneOne"> 돌아가기 </span>
          <span className="header_optionLIneTwo"> 주문내역  </span>
        </div>
        <div className="header_option">
          <span className="header_optionLIneOne"> 반가워요 </span>
          <span className="header_optionLIneTwo"> 구독과 좋아요  </span>
        </div>

        <div className="header_optionBasket">
            <Link to="/checkout"> <ShoppingBasketSharp /> </Link>
            <span className="header_optionLineTwoheader_basketCount"> 
              {basket?.length}
            </span>
        </div>
      </div>
  )
}

export default Header;