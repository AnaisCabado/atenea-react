import { useEffect, useState } from 'react'

import PublicationCard from './components/publicationCard/PublicationCard';
import PublicationList from './components/publicationList/PublicationList';

import './App.css'
import fetchData from './utils/api/fetch';

function App() {
  const [publications,setPublications] = useState([]);

  useEffect(()=>{
    // handleFetchData();
  },[])
  const handleFetchData = async()=>{
    const data = await fetchData('/publications');
    console.log(data);
    setPublications(data);
  }
  console.log(publications);

  return (
    <>
    <PublicationList publications={publications} />
    </>
  )
}

export default App
