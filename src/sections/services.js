import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Innovation management tool examines an idea holistically by evaluating its existing competition and returns it score required for a patent.',
    heading: 'Patentability Score',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      "Finding mentors is hard ? IMT helps students find their suitable mentors based on the idea's technology and various other metrics.",
    heading: 'Find your dream mentor',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Organizations have the ease of working with students ideas in a more organic and fully online way.',
    heading: 'Manage Student Ideas',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'IMT can help you market your idea to a whole new level.',
    heading: 'Marketing & advertising',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'Start with a idea, find a team and develop your idea to a full fledged startup with us.',
    heading: 'Ultimate development',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'IMT is 100% online and any individual will get 24/7 online support while working with us.',
    heading: 'Online support',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What does this tool even do ?"
          text="Features of IMT's Web and Android Portal"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
