import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 1;
    }
  }
`;

const SocialLinks = () => {
    const {
        allContentfulSocialLinks: { edges } 
    } = useStaticQuery(
        graphql`
        query SocialLinks {
            allContentfulSocialLinks {
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
        <Links>
            {edges.map(({ node }) => (
                <a key={node.id} href={node.link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${node.name}`}>
                  <img width="30" src={node.icon.file.url} alt={node.name} />
                </a>
            ))}
        </Links>
    );
}

export default SocialLinks;
