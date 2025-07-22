import React from "react";
import styled from "styled-components";
import Container from "./styled/Container";
import Section from "./styled/Section";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Container>
        <ContactContent>
          <LeftContent>
            <SectionHeading>Get In Touch</SectionHeading>
            <ContactInfoText>
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll do my best to get back to
              you!
            </ContactInfoText>
          </LeftContent>
          <RightContent>
            <ContactDetails>
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactItemText>
                  <ContactItemLabel>Email</ContactItemLabel>
                  <ContactItemValue>kairul@zen0.space</ContactItemValue>
                </ContactItemText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactItemText>
                  <ContactItemLabel>Phone</ContactItemLabel>
                  <ContactItemValue>+6011-1541 5268</ContactItemValue>
                </ContactItemText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactItemText>
                  <ContactItemLabel>Location</ContactItemLabel>
                  <ContactItemValue>Kuala Lumpur, MY</ContactItemValue>
                </ContactItemText>
              </ContactItem>
            </ContactDetails>
          </RightContent>
        </ContactContent>
      </Container>
    </Section>
  );
};

const SectionHeading = styled.h2`
  text-align: left;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    margin: ${(props) => props.theme.spacing.sm} 0 0;
    border-radius: 2px;
  }
`;

const ContactContent = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.xxl};
  align-items: flex-start;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    justify-content: flex-start;
  }
`;

const ContactInfoText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  align-items: flex-start;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.theme.borderRadius.round};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;

const ContactItemText = styled.div``;

const ContactItemLabel = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const ContactItemValue = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

export default Contact;
