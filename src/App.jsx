import {  
  createBrowserRouter,  
  createRoutesFromElements,  
  Outlet,  
  Route,  
  RouterProvider  
} from "react-router-dom"; 
 
import NavBar from "./components/NavBar";  
import Footer from "./components/Footer";  
import Home from "./pages/Home";  
import Support from "./pages/Support"; 
import Pricing from "./pages/Pricing"; 

 
const Layout = () => {   
  return ( 
    <>   
      <NavBar />   
      <Outlet />   
      <Footer />   
    </>   
  );   
};   
 
const App = () => {   
  const router = createBrowserRouter(  
    createRoutesFromElements(  
      <Route path="/" element={<Layout />}>   
        <Route index element={<Home />} /> 
        <Route path="support" element={<Support />} />  
        <Route path="pricing" element={<Pricing />} />  
        
      
      </Route>  
    )  
  );   
 
  return <RouterProvider router={router} />;   
};   
 
export default App;
