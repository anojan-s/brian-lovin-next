// @flow
// $FlowIssue
import React, { useContext } from 'react';
import { Container, Description, Icons } from './style';
import Icon from '../Icon';
import GlobalPlayer from '../GlobalPlayer/context';

export default function Footer() {
  const context = useContext(GlobalPlayer);
  const {
    trackQueue: { length },
  } = context;

  return (
    <Container addPlayerPadding={length > 0} data-cy="footer">
      <Icons>
        <a
          href="https://twitter.com/brian_lovin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="twitter" />
        </a>

        <a
          href="https://github.com/brianlovin/brian-lovin-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="github" />
        </a>

        <a
          href="https://spectrum.chat/users/brian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="spectrum-solid" />
        </a>
      </Icons>

      <Description>
        Copyright whenever. This is
        <a
          href="https://github.com/brianlovin/brian-lovin-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
        .
      </Description>
    </Container>
  );
}
