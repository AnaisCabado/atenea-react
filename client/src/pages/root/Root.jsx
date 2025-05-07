import Nav from '../../components/nav/Nav';
import SearchFilter from '../../components/searchFilter/SearchFilter';
import PublicationList from '../publicationList/PublicationList';
import { useEffect, useState } from 'react';
import fetchData from '../../utils/api/fetch';
import './Root.css';
import { Outlet } from 'react-router-dom';

function Root() {
    const [publications,setPublications] = useState([]);

  useEffect(()=>{
    handleFetchData();
  },[])
  const handleFetchData = async()=>{
    const data = await fetchData('/publications');
    setPublications(data);
  }
    return (
        <div>
            <Nav />

            <main>
                <SearchFilter />
                <Outlet />
            </main>

            <footer>© 2025 Mi App</footer>
        </div>
    );
}

export default Root;