import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './Ptext';

const ContactBannerStyles = styled.div`
.contactBanner__wrapper {
    background-color: greenyellow;
    border-radius: 8%;
    padding: 3% 0rem;
    text-align: center
}
.contactBanner__heading{
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
}
@media only screen and (max-width: 768px) {
    .contactBanner__heading{
        font-size: 2.8rem;
    }
}
`;
export default function ContactBanner() {
  return (
    <ContactBannerStyles>
    <div>
        <div className="container">
            <div className="contactBanner__wrapper">
                <PText>Avez-vous un projet en tête?</PText>
                <h3 className="contactBanner__heading">Je peux vous aider</h3>
                <Button btnText="Contactez-moi maintenant" btnLink="/
                contact" />
            </div>
        </div>
    </div>
    </ContactBannerStyles>
  );
}
