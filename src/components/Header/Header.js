import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">À&nbsp;vendre</NavLink>
          <NavLink href="/new">Nouvelles&nbsp;versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les&nbsp;enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />

        <MobileNav>
          <UnstyledButton>
            <VisuallyHidden>Shopping cart</VisuallyHidden>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Open navigation menu</VisuallyHidden>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px clamp(
    1rem,
    3.4vw,
    2rem
  );
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-y: auto;
`;

const Nav = styled.nav`
  display: flex;
  --spacing: clamp(
    1rem,
    5.8vw - 2.5rem,
    2.5rem
  );
  gap: var(--spacing);
  margin: 0px var(--spacing);

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
 display: none;
 gap: clamp(
    1.25rem,
    4vw + 0.25rem,
    2.5rem
  );

  @media ${QUERIES.tabletAndDown} {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
