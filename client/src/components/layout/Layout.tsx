import { Box } from '@chakra-ui/layout';
import { FC, ReactNode } from 'react';
import { Sidebar } from './sidebar/Sidebar';

interface SidebarProps {
  children: ReactNode;
}

export const Layout: FC<SidebarProps> = ({ children }) => {
  return (
    <Box width="100%">
      <Sidebar>{children}</Sidebar>
    </Box>
  );
};
