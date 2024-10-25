import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";
import {
  blueBlock,
  container,
  eventName,
  header,
  headerContent,
  headerContentSubtitle,
  headerContentTitle, headerImage, headerImageContainer,
  main
} from "./styles/email-ticket.ts";

interface StackOverflowTipsEmailProps {
  tips?: { id: number; description: string }[];
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";



export const StackOverflowTipsEmail = ({ test = ''}: StackOverflowTipsEmailProps) => (
    <Html>
      <Head />
      <Preview>Stack overflow tips for searching</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={blueBlock} />

          <Section style={header}>
            <Heading>THANK YOU FOR YOUR ORDER</Heading>
            <Heading style={eventName}>NEWPORT beach INTERNATIONAL BOUT SHOW</Heading>
          </Section>

        </Container>

      </Body>
    </Html>
);

StackOverflowTipsEmail.PreviewProps = {
  tips: 08450329,
} as StackOverflowTipsEmailProps;

export default StackOverflowTipsEmail;

