import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="233-208-348-487">233-208-348-487</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:brandfordjunior@gmail.com">
            brandfordjunior@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Changing the world with technology</Slogan>
        </CompanyContainer>
        <SocialContainer>
          
          <SocialIcons href="github.com/brandford7">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="www.linkedin.com/in/brandford-junior-korang-teku">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="facebook.com">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
