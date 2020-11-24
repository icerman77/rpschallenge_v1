import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container id="playcontainer">
        <div style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>This is my RPS App</div>
        <div style={{ fontSize: 65 }}> ✊ ✋ ✌️ </div>
      </Container>
         <Container id="buttoncontainer">
              <Button id="playbutton">Play</Button>
          </Container>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'purple',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })

export default App;