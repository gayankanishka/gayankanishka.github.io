import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Gayan K and I’m a Full-Stack developer!" />
      </Thumbnail>
      <Details>
        <h3>Fluent languages</h3>
        <ul>
          <li>C#</li>
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PowerShell</li>
        </ul>
        <h3>Fluent Database Technologies</h3>
        <ul>
          <li>Microsoft SQL Server</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        <h3>Frameworks and Technologies</h3>
        <ul>
          <li>.NET Framework</li>
          <li>.NET Core</li>
          <li>Azure Cloud Tech Stack</li>
          <li>ASP.NET Core web API</li>
          <li>Service Fabric</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>Docker</li>
          <li>Dapper</li>
          <li>Entity Framework Core</li>
          <li>MS Test Framework</li>
          <li>AngularJS / Angular</li>
          <li>GatsbyJS</li>
          <li>Sitecore / Sitecore SXA</li>
        </ul>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
