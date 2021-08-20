import React from 'react';
import ResumePdf from './Resume.pdf'
import Container from '@material-ui/core/Container'; 

const Resume = () => {
  return (
    <Container style={{height: '90vh', paddingBottom: '30px'}}>
      <iframe src={ResumePdf} width="100%" height="100%"></iframe>
    </Container>
  )
}

export default Resume