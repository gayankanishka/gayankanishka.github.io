import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, Links } from './styles';
import social from './social.json';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Gayan K and I’m a Full-Stack developer!</h4>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="30" src={icon} alt={name} />
            </a>
          ))}
        </Links>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Gayan K and I’m a Full-Stack developer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
