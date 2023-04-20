import {
  Button as ChakraButton,
} from '@chakra-ui/react';
import MaterialButton from '@mui/material/Button';

function App() {
  return (
    <>
      <p className="read-the-docs">
        Hello world
      </p>
      <pre>Chakra UI components and Material UI components</pre>
      {/* Chakra UI */}
      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <ChakraButton colorScheme="teal" size="lg">
          Chakra UI Button
        </ChakraButton>
      </div>
      {/* Material UI */}
      <div>
        <MaterialButton variant="outlined">Material UI Button</MaterialButton>
      </div>
    </>
  )
}

export default App
