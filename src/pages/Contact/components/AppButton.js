import React from 'react'
import styled from 'styled-components';


export default function AppButton() {
    
    const Button = styled.button `
    
        background-color:red;
    
    `;

    const showAlert = (e) => {
        console.log(e)
    };

    return (
        <Button onClick={() => showAlert()}>Test</Button>
    )
}
