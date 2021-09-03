import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterSocialLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
        Website uses reverse search technology and DejaVuAI® algorithms  provided by 1st1 Technologies, LLP.
        </FooterSubHeading>

      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>Home</FooterLink>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Prices</FooterLink>
            <FooterLink to='/'>Log In</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Support</FooterLinkTitle>
            <FooterLink to='/'>Contact Us</FooterLink>
            <FooterLink to='/'>FAQ</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterSocialLink
              href={
                '//www.youtube.com/watch?v=kTQDPkZq2jk'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              DejaVuAI® applications for Visual Art
            </FooterSocialLink>
            <FooterSocialLink
              href={
                '//www.youtube.com/watch?v=EXEq-0PUBZk'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              Visual Art Demo HD 1080p
            </FooterSocialLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterSocialLink
              href={
                '//www.instagram.com/1st1.tech'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'
            >
              Instagram
            </FooterSocialLink>
            <FooterSocialLink
              href={
                '//www.youtube.com/channel/UCFCH9klYmogY1J0np2DU1yA'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              Youtube
            </FooterSocialLink>
            <FooterSocialLink
              href={
                '//twitter.com/1st1T'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Twitter'
            >
              Twitter
            </FooterSocialLink>
            <FooterSocialLink
              href={
                '//www.linkedin.com/company/72056094/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='LinkedIn'
            >
              LinkedIn
            </FooterSocialLink>
            <FooterSocialLink
              href={
                '//www.facebook.com/1st1-Technologies-Deja-Vu-AI-111776947618029'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook'
            >
              Facebook
            </FooterSocialLink>            
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
             
          </SocialLogo>
          <WebsiteRights>1st1 Technologies © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink               href={
                '//www.facebook.com/1st1-Technologies-Deja-Vu-AI-111776947618029'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href={
                '//www.instagram.com/1st1.tech'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCFCH9klYmogY1J0np2DU1yA'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink               href={
                '//twitter.com/1st1T'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href={
                '//www.linkedin.com/company/72056094/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
