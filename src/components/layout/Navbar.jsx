import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: 'none', boxShadow: 'none' }}>
      <Toolbar disableGutters sx={{ color: '#777777', gap: '20px' }}>
        <img src={logo} alt="Logo" />

        <Link href="#" sx={{ color: '#777777', display: 'flex' }}>
          <HomeIcon /> Home
        </Link>
        <Link href="#" sx={{ color: '#777777', display: 'flex' }}>
          <HomeIcon /> People
        </Link>
        <Link href="#" sx={{ color: '#777777', display: 'flex' }}>
          <HomeIcon /> Home
        </Link>
        <Link href="#" sx={{ color: '#777777', display: 'flex' }}>
          <HomeIcon /> Notifications
        </Link>
        <TextField
          variant="outlined"
          sx={{ borderRadius: '100' }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            ),
          }}
        />

        <Button variant="contained" sx={{ background: '#DE0B0B', borderRadius: 100 }}>
          <AttachMoneyIcon /> Donate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
