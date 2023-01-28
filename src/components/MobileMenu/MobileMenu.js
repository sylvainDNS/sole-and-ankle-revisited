/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <header>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" strokeWidth={2} size={28} />
          </UnstyledButton>
        </header>
        <Nav>
          <Link href="/sale" className="active">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  padding: 32px;
  width: min(300px, 100%);

  background-color: var(--color-white);
  color: var(--color-gray-900);

  button {
    margin: -4px -12px 0 auto;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &.active {
    color: var(--color-secondary);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-size: ${18 / 16}rem;
  font-weight: var(--weight-medium);
  text-transform: uppercase;
`;

const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`;

export default MobileMenu;
