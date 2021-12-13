import React from "react";
import "./Questions.css"
import Accordion from 'react-bootstrap/Accordion'


const Questions = () => {

return(
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is MovieFlix</Accordion.Header>
    <Accordion.Body>
     MovieFlix is an application where you can search 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How much does MovieFlix cost?</Accordion.Header>
    <Accordion.Body>
      You can start a free trial which is 7 days. After that with cost will be as little as $5.99 a month!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Where can I watch?</Accordion.Header>
    <Accordion.Body>
     You can watch all of your movies and TV shows all from your browser.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>How do I start?</Accordion.Header>
    <Accordion.Body>
     You can sign up today and start watching your favorite shows and movies!
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
)

}


  
export default Questions;