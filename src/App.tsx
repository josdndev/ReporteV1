// src/App.js

import { useState } from 'react';
import { Box, Heading, Button } from "@chakra-ui/react";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ReportePDF from './components/ui/ReportePDF';

const App = () => {
  const [tareas, setTareas] = useState({
    name: 'Nombre barco',
    task: [
      { date: "28/12/1945", descripcion: "Recargar Gasolina", type: 'correctivo' },
      { date: "28/12/1945", descripcion: "Recargar Gasolina", type: 'preventivo' },
      { date: "28/12/1945", descripcion: "Recargar Gasolina", type: 'critico' }
      // ... other tasks
    ]
  });

  return (
    <Box p={5} bg="gray.50" minH="100vh">
      <Box 
        maxW="800px" 
        mx="auto" 
        bg="white" 
        borderRadius="md" 
        boxShadow="lg" 
        p={6} 
        mt={10}
      >
        <Heading 
          as="h1" 
          size="xl" 
          mb={4} 
          textAlign="center" 
          color="teal.600" 
          textTransform="uppercase"
        >
          Generador de Reportes
        </Heading>
        
        <Button 
          onClick={() => {}} 
          colorScheme="teal" 
          width="full" 
          mb={4} 
          _hover={{ bg: "teal.500" }} // Hover effect
        >
          Ver Reporte
        </Button>

        <PDFViewer 
          style={{ width: '100%', height: '400px', border: '1px solid #e2e8f0' }} 
        >
          <ReportePDF tareas={tareas} />
        </PDFViewer>

        <PDFDownloadLink
          document={<ReportePDF tareas={tareas} />}
          fileName="reporte.pdf"
        >
          {({ loading }) => (
            <Button 
              mt={4} 
              colorScheme="teal" 
              width="full" 
              _hover={{ bg: "teal.500" }} // Hover effect
            >
              {loading ? 'Cargando documento...' : 'Descargar Reporte'}
            </Button>
          )}
        </PDFDownloadLink>
      </Box>
    </Box>
  );
};

export default App;
