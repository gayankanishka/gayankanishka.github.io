import React from 'react';
 import { useStaticQuery, graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const {
    allContentfulSkills: { nodes } 
  } = useStaticQuery(
    graphql`
      query SkillSet {
        allContentfulSkills(sort: {order: DESC, fields: title}) {
          nodes {
            id
            title
            skillStack
          }
        }
      }
    `
  );
  return (
    <Wrapper id="skills">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="skills image" />
        </Thumbnail>
        <Details>
          {nodes.map(({ id, title, skillStack }) => (
            <div key={id}>
              <h3>{title}</h3>
              <ul>
                {skillStack.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
