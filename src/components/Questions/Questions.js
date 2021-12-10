import React from "react";
import "./Questions.css"
import Accordion from 'react-bootstrap/Accordion'
import { Card, useAccordionButton } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('Its clicked!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'purple' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function questionsData() {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        What is MovieFlix?
                    </Card.Header>
                    <Card.Header>
                        <CustomToggle eventKey="0">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>MovieFlix is an application where you can find your favortive TV Shows and movies all on your browser</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header> How much is MovieFlix?</Card.Header>
                    <Card.Header>
                        <CustomToggle eventKey="1">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>New members will start off with a 7 day free trial and then it will be as little as $5.99 each month! Sign up!</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header> Where can I watch?</Card.Header>
                    <Card.Header>
                        <CustomToggle eventKey="1">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>You can watch you TV shows or Movies right here on our website!</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>How do I start</Card.Header>
                    <Card.Header>
                        <CustomToggle eventKey="1">+</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}

export default questionsData;