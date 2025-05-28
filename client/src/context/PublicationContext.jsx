import React, { createContext, useState, useEffect } from 'react';
import { getAllPublications } from '../utils/api/publication';

export const PublicationContext = createContext();

export function PublicationProvider({ children }) {
  const [publications, setPublications] = useState([]);

  const addPublication = (newPublication) => {
    setPublications((prev) => [newPublication, ...prev]);
  };
  
  // Cargar publicaciones iniciales
  useEffect(() => {
    async function fetchPublications() {
      try {
        const data = await getAllPublications();
        setPublications(data);
      } catch (error) {
        console.error('Error loading publications', error);
      }
    }
    fetchPublications();
  }, []);

  return (
    <PublicationContext.Provider value={{ publications, addPublication }}>
      {children}
    </PublicationContext.Provider>
  );
}
