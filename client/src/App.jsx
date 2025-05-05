import { useState } from 'react'
import PublicationCard from './components/publicationCard/PublicationCard';
import publications from './utils/data';
import './App.css'

function App() {
  console.log(publications);

  return (
    <>
    <PublicationCard publication={publications[0]} />
    </>
  )
}

export default App
