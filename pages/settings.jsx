import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { OutlinedInput, FormControl, InputLabel, Select, MenuItem, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Settings = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [language, setLanguage] = useState('');

  return (
    <div className='container mx-auto px-20'>
      <h1 className='pt-4 text-2xl font-semibold text-blue-950 pb-4'>Profile Settings</h1>
      <div className='box-set p-7  bg-gray-50 rounded-xl hover:shadow-xl transition duration-500 shadow-gray-400 hover:bg-gray-200'>

        {/* Header */}
        <div className='flex justify-between items-center pb-3'>
          <div className='flex items-center'>
            <SettingsIcon className='text-blue-950' />
            <p className='pl-1.5 font-semibold text-xl text-blue-950'>Change Password</p>
          </div>
          <div>
            <button className='px-8 text-lg rounded-lg bg-blue-900 py-1 text-white cursor-pointer hover:bg-indigo-50 hover:text-blue-950 transition duration-500'>Save</button>
          </div>
        </div>

        <div className='border-[0.01px] opacity-45 border-b-blue-950'></div>

        {/* Old Password */}
        <div className='pt-4'>
          <p className='text-md font-semibold text-blue-950 mb-1'>Old Password:</p>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              type={showOldPassword ? 'text' : 'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter your old password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    edge="end"
                  >
                    {showOldPassword ? <VisibilityOff className='text-blue-950'/> : <Visibility className='text-blue-950'/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/* New Password */}
        <div className='pt-4'>
          <p className='text-md font-semibold text-blue-950 mb-1'>New Password:</p>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff className='text-blue-950'/> : <Visibility className='text-blue-950'/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/* Confirm Password */}
        <div className='pt-4'>
          <p className='text-md font-semibold text-blue-950 mb-1'>Confirm New Password:</p>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff className='text-blue-950'/> : <Visibility className='text-blue-950'/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/* Language Section */}
        <div className='language flex items-center pt-8 pb-3'>
          <GTranslateIcon className='text-blue-950' />
          <p className='pl-1.5 font-semibold text-xl text-blue-950'>Change Language</p>
        </div>

        <div className='border-[0.01px] opacity-45 border-b-blue-950'></div>

        <div className='pt-6'>
          <FormControl fullWidth>
            <InputLabel id="language-select-label">Select Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label="Select Language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="uz">O‘zbek</MenuItem>
              <MenuItem value="ru">Русский</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
        </div>

      </div>
    </div>
  );
};

export default Settings;
