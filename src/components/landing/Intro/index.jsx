import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import SocialLinks from 'components/common/SocialLinks';

export const Intro = () => {
  const {
    allContentfulAsset: { edges } 
  } = useStaticQuery(
    graphql`
      query ProfilePic {
        allContentfulAsset(filter: {contentful_id: {eq: "4jb7Z4bE5GxcNxliJ1x1BR"}}) {
          edges {
            node {
              title
              fluid(maxWidth: 500) {
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    `
  );
  
  return (
    <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
          <Details>
            <h1>Hi There!</h1>
            <h4>I’m Gayan K and I’m a Full-Stack developer!</h4>
            <SocialLinks />
            <Button as={AnchorLink} href="#contact">
              Hire me
            </Button>
          </Details>
          <Thumbnail>
            {edges.map(({node}) => (
              <img
              srcSet={node.fluid.srcSet} 
              src={node.fluid.src} 
              alt={node.title} 
              loading="lazy" 
              sizes={node.fluid.sizes} 
              key={node.title} 
              style={{maxWidth: 500 }} />
            ))}
          </Thumbnail>
        </IntroWrapper>
      </Wrapper>
  );
};
