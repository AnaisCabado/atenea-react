import { useEffect, useState } from 'react'

import PublicationList from './components/publicationList/PublicationList';

import './App.css'

const routes = {
  home: <h1>home</h1>,
  publications: <PublicationList />,
}

function App() {
  const [route,setRoute] = useState('home');

  return (
    <>
    <PublicationList />
    {routes[route]}
    </>
  )
}

export default App
