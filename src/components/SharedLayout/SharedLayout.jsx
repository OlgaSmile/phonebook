import Authentification from 'components/Authentification/Authentification';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { loggedIn } from 'Redux/Auth/AuthSelectors';
import { Flex } from '@chakra-ui/react';

export default function SharedLayout() {
  const isLoggedIn = useSelector(loggedIn);
  return (
    <div>
      <header>
        <nav>
          <Flex align="center" justify="space-between">
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            {isLoggedIn ? <UserMenu /> : <Authentification />}
          </Flex>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
