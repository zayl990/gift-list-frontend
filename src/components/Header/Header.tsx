import './Header.css';
import { Link, useMatch } from 'react-router-dom';
import React, { ReactNode } from 'react';

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
}

function CustomNavLink({ to, children }: CustomNavLinkProps) {
  let match = useMatch(to);
  return (
    <Link className={match ? 'active' : ''} to={to}>{children}</Link>
  );
}

export const Header = () => {
  return (
    <>
      <nav className="menu-app">
        <CustomNavLink to="/gift">Gift</CustomNavLink>
        <CustomNavLink to="/test">Test</CustomNavLink>
        <CustomNavLink to="/test2">Test2</CustomNavLink>
      </nav>
      <h1>Santa APP</h1>
    </>
  );
};
