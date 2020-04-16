import React, { Component } from 'react';
import './App.css';
import Body from "./components/Body";
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import Video from "./components/Video";
// import ResponsivePlayer from "./components/ResponsivePlayer";
import { Player } from 'video-react';
import videos from './video/1.mp4';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header
          title={"Video Play"}
        />
        <Body text="Description about project" />
        <Container>
          <Col> video 1</Col>
          <Col> video 2</Col>
        </Container>
        <Container >
          <video loop autoPlay>
            <source src={videos} type="video/mp4"/>
          </video>
          <p>:::</p>
          <video loop autoPlay>
            <source src={videos} type="video/mp4"/>
          </video>
        </Container>

      </div>
    )
  }
}

export default App;



// <Container>
//   <Player style={{marginLeft:10, marginRight:10}}
//     playsInline
//     poster="/assets/poster.png"
//     src='https://www.youtube.com/watch?v=EngW7tLk6R8'
//   />
//   <p>:::</p>
//   <Player style={{marginLeft:20, marginRight:20}}
//     playsInline
//     poster="/assets/poster.png"
//     src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//   />
// </Container>
