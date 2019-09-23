import React from 'react';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      {this.props.children}   
    </Container>
  );
}

export default App;
