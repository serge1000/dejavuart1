import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.component';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from '../../components/InfoSection/InfoSection.elements';

function SignUpSignIn({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>

            </InfoColumn>
            <InfoColumn>

            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}


export default SignUpSignIn;
