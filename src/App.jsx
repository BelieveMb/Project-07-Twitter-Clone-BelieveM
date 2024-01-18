import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import PageError from "./pages/pageError.jsx";
import UserName from './pages/userName';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/username" element={<UserName />} >
            <Route path=":id" element={<UserName />} />
            <Route path="*" element={<PageError />} />
          </Route>
          <Route path="*" element={<PageError />} />
      </Routes>
    
      
    </BrowserRouter>

  );
}
