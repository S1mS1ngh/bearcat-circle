import React from 'react';
import styled from 'styled-components';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

export const Chat = () => (
   <GridWrapper>
     <h2>Chat Page</h2>
     <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
     <p>I am a kitty cat, sup, feed me, no cares in the world</p>
     <p>Meow meow, I tell my human purr for no reason but to chase after</p>
   </GridWrapper>
 )