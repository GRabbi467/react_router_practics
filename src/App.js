import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Main from './Layout/Main';
import Products from './Components/Products.js/Products';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart.js'
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';



function App() {


  const router = createBrowserRouter([
    {
      path : "/",element: <Main></Main>,
      children : [
        {path:"/",element:<Home></Home>},
        {path: "/home",element: <Home/>},
        {path:"/About",element: <About />},
        {
        path :"/Products",
        loader :async()=>{
          return fetch('https://api.escuelajs.co/api/v1/products');
        },
        element:<Products></Products>},
        
       
      ]
    },
    {
      path:"/Product/:ProductId",
      loader : async ({params})=>{
        return fetch(`https://api.escuelajs.co/api/v1/products/${params.ProductId}`  )
      },
      element :<ProductDetail></ProductDetail>
    },

    {
      path: "/Cart",
      element:<Cart></Cart>,
    },
    {
      path:"/posts",
      loader : async ()=>{
        return fetch('https://jsonplaceholder.typicode.com/posts');
      },
      element : <Posts></Posts>
    },
    {
      path:"/posts/:postID",
      loader : async ({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
      },
      element:<PostDetail></PostDetail>
    },

    {
      path:"*" ,element: <div>404 NOT FOUND</div>
    }
  ]);



  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
    
  );
}

export default App;
