import react from 'react';
import React from 'react';
import {Segment, Header, Image} from 'semantic-ui-react';


const Myheader = ({name}) => {
    return(
        <Segment inverted vertical padded='very'>
            <Header as='h1'>This is header for {name} AutoVault!</Header>
            <Header as='h2'>This is subheader</Header>
            <Image src={'TejaLogo2.png'} size='small' centered/>
        </Segment>
    )
}


export default Myheader;