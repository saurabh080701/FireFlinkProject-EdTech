


import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';

interface FeedBackProps {
    handleButtonClick: () => void;
}

const FeedBack: React.FC<FeedBackProps> = ({ handleButtonClick }) => {
    const [showFeedback, setShowFeedback] = useState(true); 

    const handleButtonClickLocal = () => {
        setShowFeedback(false);
        handleButtonClick(); 
    };

    return (
        <Stack sx={{ display: 'flex', flexDirection: 'row', height: '10%', justifyContent: 'center', alignItems: 'center' }}>
            {showFeedback ? (
                <>
                    <Typography>Was this information helpful?</Typography>
                    <Button onClick={handleButtonClickLocal} sx={{ borderRadius: '44%', backgroundColor: '#efefee' }}>
                        <img src="https://help-centre.pw.live/_next/static/media/thumbs-up.651d2633.svg" alt="Thumbs up" />
                    </Button>
                    <Button onClick={handleButtonClickLocal} sx={{ borderRadius: '44%', backgroundColor: '#efefeef' }}>
                        <img src="https://help-centre.pw.live/_next/static/media/thumbs-down.7ba6278c.svg" alt="Thumbs down" />
                    </Button>
                </>
            ) : (
                <Typography>Thank you for the Feedback!</Typography>
            )}
        </Stack>
    );
};

export default FeedBack;


 