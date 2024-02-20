

import React, { useState } from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQ from '../../../backend/FaqQuestion.json';
import FeedBack from './Feedback';

const FaqAccor = () => {
    const [expanded, setExpanded] = useState<number | false>(false);
    const [showFeedback, setShowFeedback] = useState<boolean>(true);

    const handleChange = (panelIndex: number) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panelIndex : false);
    };
    const handleButtonClick = () => {
        setShowFeedback(false); 
    };
    return (
        <div className='question' style={{ gap: '8px',margin: '20px 40px', padding: '40px', width: '90vw', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'flex-start', height: expanded !== false ? '85vh' : '65vh',  transition: 'height 0.3s ease-in-out' }}>
            <h2>Tell us how we can help 👋</h2>
            {FAQ.map(({ title, description }, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    sx={{ width: '70%', backgroundColor: '#F0F4FA', borderRadius: '5px', }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography sx={{fontWeight: '550'}}> What is {title} ?</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{description}</Typography>
                        <hr />
                        <FeedBack handleButtonClick={handleButtonClick}  />
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FaqAccor;





