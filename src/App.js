import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Foundation from "./pages/shop/foundation/Foundation";
import Blusher from "./pages/shop/blusher/Blusher";
import Lipstick from "./pages/shop/lipstick/Lipstick";
import Brushes from "./pages/shop/brush/Brushes";
import Eyeshadow from "./pages/shop/eyeshadow/Eyeshadow";
import Skincare from "./pages/shop/skincare/Skincare";
import Nails from "./pages/shop/nails/Nails";
import {useEffect, useState} from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

function App() {
  
  const langAtt = document.getElementsByTagName("html")[0];

  const [lanData, setLanData] = useState({});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={lanData}/>,
    },
    {
      path: "/contact",
      element:<Contact/>
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/shop/foundation",
      element: <Foundation />
    },
    {
      path: "shop/blusher",
      element: <Blusher />
    },
    {
      path: "shop/lipstick",
      element: <Lipstick />
    },
    {
      path: "shop/brushes",
      element: <Brushes />
    },
    {
      path: "shop/eyeshadow",
      element: <Eyeshadow />
    },
    {
      path: "shop/nails",
      element: <Nails />
    },
    {
      path: "shop/skincare",
      element: <Skincare />
    }
  ]);
 // console.log(lanData);

  useEffect(()=>{
    setLanData(()=>{
      if(langAtt.getAttribute("lang")==="en"){
        return "en";
      }else if(langAtt.getAttribute("lang")==="ar"){
        return "ar"
      }
    });
  },[])
  


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
