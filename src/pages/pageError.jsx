import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import RightBar from '../components/rightbar/RightBar'
import Layout from '../components/layout'
import { useState, useEffect } from 'react';
import axios from 'axios';

function PageError() {
  const [apiData, setApiData] = useState([]);
  const baseURL2 =  'https://65c20c3ff7e6ea59682a7c59.mockapi.io/tweets/users'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65c20c3ff7e6ea59682a7c59.mockapi.io/tweets/users');
        setApiData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

      fetchData();
    }, []);

    return (
      <div>
        <h1>Données de l'API</h1>
        <ul>
          {apiData.map((item, index) => (
            <li key={index}>{item.hastag}</li>
          ))}
        </ul>
      </div>
    );
  }
  // return (
  //   <>
  //     <SideBar />
  //           <Layout>
  //             <h1>Le site est en construction</h1>
  //           </Layout>
  //     <RightBar />
  //   </>
  // ) }

export default PageError