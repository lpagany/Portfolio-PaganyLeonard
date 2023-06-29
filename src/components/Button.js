import React from 'react'
import styled from 'styled-components'

const ButtonStyles = styled.div`
.div{
    background-color: beige;
    border-radius:1rem;
}
`;
export default function Button() {
  return (
    <ButtonStyles>
    <div>Button</div>
    </ButtonStyles>
  );
}
