import { FC } from 'react';
import { IconUserCircle } from '@tabler/icons-react';
import {
  ActionIcon,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from '@mantine/core';
import { checkIsAuthenticated } from '@/auth/checkIsAuthenticated';
import GoogleSignInButton from '@/components/LoginForm/GoogleSignInButton/GoogleSignInButton';
import SignOutButton from '@/components/LoginForm/SignOutButton/SignOutButton';
import classes from './UserIcon.module.css';

export const UserIcon: FC = async (): Promise<JSX.Element> => {
  const isAuthenticated = await checkIsAuthenticated();

  return (
    <Menu>
      <MenuTarget>
        <ActionIcon variant={'transparent'}>
          <IconUserCircle className={classes.icon} />
        </ActionIcon>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem>
          {isAuthenticated ? <SignOutButton /> : <GoogleSignInButton />}
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
};
