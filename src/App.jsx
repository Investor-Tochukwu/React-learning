 import SayHello from "./components/SAyHello";
 import SayHelloArrow  from "./components/SAyHello";
 import ProductCard from "./components/ProductCard";
import Welcome from "./components/Welcome";
import Items from "./components/Items";
import Intro from "./components/Intro";
import { Footer, Header } from "./components/Header";



function App() {
  
  return (
    <>
     <SayHello />

      <ProductCard />
      <Welcome />
      <Items/>
      <SayHelloArrow />
      <Intro />

      <Header />

     <main>
      <p> I am learning and Practicing React. I am enjoying the process of learning React and I am excited to build more projects with React. </p>
     </main>
      
      <Footer />
      
    </>
  )
}

export default App

