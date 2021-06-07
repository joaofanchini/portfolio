import React from 'react';
import './App.css';

import Container from "../components/shared/Container";
import Presentation from "../components/Presentation";
import Journey from "../components/Journey";

function App() {
    return (
        <>
            <Container>
                <Presentation/>
                <Journey/>
            </Container>
            {/*<Navigation/>*/}
        </>
    );
}

export default App;
