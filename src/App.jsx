import AddTwo from "./components/AddTwo";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Menu from "./components/Menu";
import OrderButton from "./components/OrderButton";
import ProductCard from "./components/ProductCard";
import ProductCard2 from "./components/ProductCard2";
import ProductList from "./components/ProductList";
import SayHello from "./components/SayHello";
import WelcomeBanner from "./components/WelcomeBanner";
import WelcomeMessage from "./components/WelcomeMessage";



function App() {

  function handleAddToCart(productName) {
    alert(`${productName} added to cart!`);
  }
  

  return (
    <>
      <SayHello />
      <ProductCard />
      <WelcomeBanner />
      <WelcomeBanner />
      <OrderButton />
      <Banner />
      <Intro />
      <AddTwo />
      <div className="flex flex-col items-center w-full border">
        <h2 className="font-bold text-5xl">Our Products</h2>

        <ProductList />
      </div>

      <CourseList />
      <WelcomeMessage/>
      <Login/>
      <Menu/>


      <h1>My Products</h1>

      <ProductCard2

       name="iPhone 17"
        price={1200}
        inStock={true}
        onAddToCart={handleAddToCart}
      />

       <ProductCard
        name="Samsung S26"
        price={900}
        inStock={true}
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        name="PlayStation 5"
        price={500}
        inStock={false}
        onAddToCart={handleAddToCart}
      />

    </>
  );
}

export default App;


