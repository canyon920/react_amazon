import './Home.css'
import Product from './Product';
function Home(){
  return(
    <div className="home">
      <span className="home-container">
        <img className="home_image" src="" alt="" />
          <div className="home_row">
          <Product
              id="1234" 
              title="제품1" 
              price={3000} 
              image="https://en.pimg.jp/024/292/158/1/24292158.jpg" 
              rating={5} />
          </div>
          <div className="home_row">
            <Product
              id="1234" 
              title="제품1" 
              price={3000} 
              image="https://en.pimg.jp/024/292/158/1/24292158.jpg" 
              rating={5} />
                <Product
              id="1234" 
              title="제품1" 
              price={3000} 
              image="https://en.pimg.jp/024/292/158/1/24292158.jpg" 
              rating={5} />
                <Product
              id="1234" 
              title="제품1" 
              price={3000} 
              image="https://en.pimg.jp/024/292/158/1/24292158.jpg" 
              rating={5} />

          </div>
          <div className="home_row">
          <Product
              id="1234" 
              title="제품1" 
              price={3000} 
              image="https://en.pimg.jp/024/292/158/1/24292158.jpg" 
              rating={5} />
            <Product
              id="1234" 
              title="제품1" 
              price={3000} 
              image="https://en.pimg.jp/024/292/158/1/24292158.jpg" 
              rating={5} />
          </div>
      </span>
    </div>
  )
}

export default Home;