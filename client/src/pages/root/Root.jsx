import Nav from '../../components/nav/Nav';
import { useEffect, useState } from 'react';
import fetchData from '../../utils/api/fetch';
import { AuthProvider } from '../../context/AuthContext';
import './Root.css';
import { Outlet } from 'react-router-dom';

function Root() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, [])
  const handleFetchData = async () => {
    const data = await fetchData('/publications');
    setPublications(data);
  }
  return (
    <>
      <AuthProvider>
        <Nav />

        <main>
          <Outlet />
        </main>

        <footer>

        </footer>
      </AuthProvider>
    </>
  );
}

export default Root;