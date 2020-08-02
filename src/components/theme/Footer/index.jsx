import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';

export const Footer = () => {
  const {
        allContentfulSocialLinks: { edges } 
    } = useStaticQuery(
        graphql`
        query FooterSocialLinks {
            allContentfulSocialLinks(filter: {contentful_id: {eq: "3zKKRtQoxsMSMJQst1kaRz"}}) {
                edges {
                    node {
                        id
                        name
                        link
                        icon {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
      `
    );
  

  return (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <h2>Gayan K</h2>
          <span>© All rights are reserved | {new Date().getFullYear()} </span>
        </Details>
        <Links>
          {edges.map(({ node }) => (
            <a key={node.id} href={node.link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${node.name}`}>
              <img width="24" src={node.icon.file.url} alt={node.name} />
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  );
};
