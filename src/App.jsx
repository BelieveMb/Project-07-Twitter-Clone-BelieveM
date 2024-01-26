import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import PageError from "./pages/pageError.jsx";
import UserName from './pages/userName';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import data from './data/initial-data.json'
import { useState } from "react";
import TweetContext from "./context/tweetContext.jsx";


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  const [allData, setAllData] = useState(data);
  const userOnline = 1;

  return (
    <BrowserRouter>
        <TweetContext.Provider value={{allData, userOnline}}>
          <Routes>

              <Route path="/" element={
                <Layout>
                  <Home />
                </Layout>
              } />
              <Route path="/username" element={<UserName />} >
                <Route path=":id" element={<UserName />} />
              </Route>
              <Route path="*" element={<PageError />} />

          </Routes>
        </TweetContext.Provider>
    </BrowserRouter>

  );
}
