import { Avatar, Menu, MenuItem, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
  const isActive = (path) => router.pathname === path;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const openLogoutDialog = () => {
    setLogoutDialogOpen(true);
    handleMenuClose();
  };

  const closeLogoutDialog = () => {
    setLogoutDialogOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setLogoutDialogOpen(false);
    router.push('/login');
  };

  return (
    <nav className='bg-blue-950 flex justify-between px-20 container mx-auto py-3 items-center shadow-2xl'>
      <div>
        <Link href="/">
          <h1 className='text-white text-2xl font-bold hover:opacity-70 duration-500 hover:scale-105'>Was.UZ</h1>
        </Link>
      </div>

      <div className='flex gap-10 text-white'>
  <Link href="/faculty" className={`text-lg transition-colors duration-300 ${isActive('/faculty') ? 'text-sky-400 font-semibold' : 'hover:text-sky-600'}`}>
    <h3>Faculty</h3>
  </Link>
  <Link href="/students" className={`text-lg transition-colors duration-300 ${isActive('/students') ? 'text-sky-400 font-semibold' : 'hover:text-sky-600'}`}>
    <h3>Students</h3>
  </Link>
  <Link href="/help" className={`text-lg transition-colors duration-300 ${isActive('/help') ? 'text-sky-400 font-semibold' : 'hover:text-sky-600'}`}>
    <h3>Help</h3>
  </Link>
</div>

      <div>
        <IconButton onClick={handleMenuClick}>
          <Avatar alt="User" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx: {
              paddingY: 1,
              paddingX: 2,
              minWidth: 150,
            },
          }}
        >
          <MenuItem onClick={openLogoutDialog} sx={{ py: 1.5, px: 2 }}>
            <LogoutIcon className='mr-3 text-blue-950' /> <p className='text-blue-950 text-lg'>Long Out</p>
          </MenuItem>
          <Link href="/settings">
          <MenuItem  sx={{ py: 1.5, px: 2 }}>
            <SettingsIcon className='mr-3 text-blue-950' /> <p className='text-blue-950 text-lg'>Settings</p>
          </MenuItem>
          </Link>
        </Menu>
      </div>

      {/* Logout confirmation dialog in English */}
      <Dialog
        open={logoutDialogOpen}
        onClose={closeLogoutDialog}
        aria-labelledby="logout-dialog-title"
        aria-describedby="logout-dialog-description"
      >
        <DialogTitle id="logout-dialog-title">Are you sure you want to log out?</DialogTitle>
        <DialogContent>
          This action will log you out of the system.
        </DialogContent>
        <DialogActions>
          <Button onClick={closeLogoutDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="error" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
}
