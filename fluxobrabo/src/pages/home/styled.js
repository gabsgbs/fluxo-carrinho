

import styled from "styled-components";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 3em;


  .lista-produtos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .carousel-container {
    width: 100%;
    height: 21em;
  }

.h1  {
  text-align: center;
  align-self: center;
}

.button {
  align-self: center;
  height: 3em;
  width: 6em;
  font-size: 2em;
  border-radius: 10em;
  background-color: aquamarine;
}
`


export { Container }