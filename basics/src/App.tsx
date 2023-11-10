import { useState } from 'react';
import { Navbar, Message, ListGroup, Alert, Button, DisAlert, Calculator } from './components';

function App() {

  const [alertVisible, setAlertVisibility] = useState(false);

  let items = [ "New York", "San Fransisco", "Tokyo", "London" ]

  const handleSelectItem = (item:string) => {
    console.log(item);
  }

  return (
    <> 
      <Navbar />
      <Message />
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      {alertVisible && <Alert onClose={ () => setAlertVisibility(false) }>
        Hello <span>World</span>!!
      </Alert>}
      <Button onClick={() => setAlertVisibility(true)}> Sign Up </Button>
      {/* <DisAlert /> */}
      <Calculator />
    </>
  )
}

export default App
