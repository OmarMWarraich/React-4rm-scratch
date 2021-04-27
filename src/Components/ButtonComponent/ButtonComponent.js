import React from 'react';
import styled from 'styled-components';

export const Button = styled.Button`
    background-color: white;
    color: navy;
    width: 80px;
    height: 40px;
    `
export default function ButtonComponent (props) {
    return (
        <>
        <Button>Add City</Button>
        </>
    )
}
