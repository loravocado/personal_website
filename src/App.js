import React from 'react';
import './App.css';
import { Grid, Image } from 'semantic-ui-react'

function App() {
  return (
      <Grid  verticalAlign='middle' style={{backgroundColor:'#1cadd7', height:"105vh"}}>
         <Grid.Column>
             <Image src='https://i.imgur.com/CxWfdcp.png'centered ></Image>
         </Grid.Column>
     </Grid>
  );
}

export default App;
