import Nav from '../../components/nav/Nav';
import { useEffect, useState } from 'react';
import fetchData from '../../utils/api/fetch';
import { AuthProvider } from '../../context/AuthContext';
import { PublicationProvider } from '../../context/PublicationContext';  // importa tu provider
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
    <AuthProvider>
      <PublicationProvider>
        <Nav />
        <main>
          <Outlet />
        </main>
        <footer>
          {/* Aquí tu footer si tienes */}
        </footer>
      </PublicationProvider>
    </AuthProvider>
  );
}

export default Root;
