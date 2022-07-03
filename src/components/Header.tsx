import {
  AppBar,
  Toolbar,
  Stepper,
  StepLabel,
  Step,
  Box,
  Container,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../css/Header.css';

/**
 * Creates a Header Component that displays the reservation steps
 * @return {JSX.Element}
 */
export default function Header() {
  const location = useLocation();
  const [step, setStep] = useState(0);
  const routes = [
    '/',
    '/search',
    '/table',
    '/personal-data',
    '/reservation-details',
  ];

  useEffect(() => {
    const index = routes.indexOf(
      routes.filter(el => location.pathname.includes(el)).at(-1) ?? '',
    );

    setStep(index >= 0 ? index : 0);
  }, [location]);

  const steps = [
    'Select a time',
    'Find a location',
    'Choose a table',
    'Send your reservation',
  ];
  return (
    <AppBar position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar className='header-container'>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src='/logo192.png' className='header-icon'></img>
          </Link>
          <Box sx={{ width: '80%', flexGrow: 1 }}>
            <Stepper activeStep={step}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
