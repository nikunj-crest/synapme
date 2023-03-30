import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import UserLogo from '../../assets/Figma.png';

const requests = [
  { name: 'Kevin', date: new Date() },
  { name: 'Johny', date: new Date() },
  { name: 'John', date: new Date() },
];

function FriendRequests() {
  return (
    <List sx={{ marginTop: '10px', width: 260 }}>
      <Typography sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        Synap Request
        <Avatar
          sx={{
            background: '#DE0B0B',
            fontSize: '14px',
            width: '20px',
            height: '20px',
          }}
        >
          {requests.length}
        </Avatar>
      </Typography>
      {requests.map((request) => (
        <>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt={request.name} src={UserLogo} />
            </ListItemAvatar>
            <ListItemText>
              {request.name}
              <CheckCircleIcon sx={{ color: '#DE0B0B', fontSize: '12px', marginLeft: '2px' }} />
            </ListItemText>
          </ListItem>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="p" color={'#777777'}>
              Want to friend with you
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Button
                sx={{
                  borderRadius: 100,
                  color: '#DE0B0B',
                  borderColor: '#DE0B0B',
                }}
                variant="outlined"
                size="small"
              >
                Decline
              </Button>
              <Button
                sx={{ borderRadius: 100, background: '#DE0B0B' }}
                variant="contained"
                size="small"
              >
                Accept
              </Button>
            </Box>

            <Typography sx={{ color: '#777777', fontSize: '14px' }}>
              {request.date.toLocaleDateString()}
            </Typography>

            <Divider />
          </Box>
        </>
      ))}
    </List>
  );
}

export default FriendRequests;
