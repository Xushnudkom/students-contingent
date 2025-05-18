import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Input, InputAdornment, IconButton, Snackbar, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('auth', 'true');
      setSnackbar({ open: true, message: 'Successfully logged in!', severity: 'success' });
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } else {
      setSnackbar({ open: true, message: 'Incorrect username or password!', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="login flex min-h-screen container mx-auto">
    
      <div className="bg-gradient-to-l from-white via-blue-300 to-blue-950 flex justify-center items-center w-1/2">
        <Image src="/login-img.png" width={600} height={500} alt="Login Image" className="pt-[100px] pb-[47px]" />
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-sm px-6 py-12">
          <div className="text-center">
            <h2 className="text-[14px] flex w-[240px] ml-10 font-semibold text-gray-900">
              Design and Implementation of a Web Application for Student Population and Research Activity Reporting
            </h2>
            <Image className="mx-auto" src="/univercity-logo.jpg" width={150} height={100} alt="Your Company" />
          </div>

          <form className="space-y-6 mt-1" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  sx={{
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    padding: '5px',
                    px: '15px',
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-2">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  sx={{
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    padding: '5px',
                    px: '15px',
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold text-white shadow hover:opacity-70"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="text-sm pt-4">
            <p>
              Forgot password yet?
              <a href="#" className="font-semibold pl-2 text-gray-700 hover:text-gray-900">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
