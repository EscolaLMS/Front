import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const TempEmail = () => {
    const [open, setOpen] = useState(true);

    return (
        <Alert color="info" isOpen={open} toggle={() => setOpen(!open)}>
            <p>
                This demo is using fake email service{' '}
                <a href="https://ethereal.email/messages" target="_blank">
                    ethereal.email
                </a>
                <br />
                Use the following credentials to check what emails are being&nbsp;sent.
                <br />
                Name: <code>Tina Hagenes</code>
                <br />
                Username: <code>tina.hagenes7@ethereal.email</code>
                <br />
                Password: <code>gcWVwGD4pk33As1YdT</code>
                <br />
            </p>
        </Alert>
    );
};

export default TempEmail;
