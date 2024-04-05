import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function AccordionLyt( {expanded,title,children,collapse}: any ) {
  return (
    <>
      <Accordion expanded={expanded} onChange={()=>{
        collapse((prev:any)=>!prev)
      }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {
          children
        }
        </AccordionDetails>
      </Accordion>
      
    
    </>
  );
}
