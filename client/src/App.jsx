import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Nav';
import PublicationList from './pages/publication/publicationList/PublicationList';
import Auth from './components/auth/Auth';
import RouteContext from './context/RouteContext';
import { AuthProvider } from './context/AuthContext';
import { PublicationProvider } from './context/PublicationContext';
import './App.css'
// import Greeting from './components/greeting/Greeting';



function App() {
  const [route, setRoute] = useState("home");


  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  const routes = {
    home: <h1>Home</h1>,
    product: <PublicationList />,
    login: <Auth />
  }
  return (
    <>
      <RouteContext.Provider value={{ route: route, onRouteChange: handleRouteChange }} >
        <AuthProvider>
          <PublicationProvider>
            <Navbar />
            {routes[route]}
          </PublicationProvider>
        </AuthProvider>
      </RouteContext.Provider>
    </>
  )
}

export default App