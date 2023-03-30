import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import UserLogo from '../../assets/Figma.png';

const networks = [
  { id: 1, name: 'Warren' },
  { id: 2, name: 'Alexander' },
  { id: 3, name: 'Michel' },
  { id: 4, name: 'Joseph' },
  { id: 5, name: 'Daniel' },
  { id: 6, name: 'Emile' },
];

const NetworkList = () => {
  return (
    <Grid item xs={12} md={6}>
      <Typography
        sx={{ mt: 4, mb: 2, display: 'flex', justifyContent: 'space-between' }}
        variant="h6"
        component="div"
      >
        Network List <span style={{ color: '#DE0B0B' }}>{networks.length}</span>
      </Typography>
      <List dense={false}>
        {networks.map((network) => (
          <ListItem
            key={network.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <MoreVertIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={UserLogo} />
            </ListItemAvatar>
            <ListItemText primary={network.name} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default NetworkList;
