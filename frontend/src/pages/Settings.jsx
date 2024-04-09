import { Box, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";

const Settings = () => {
  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        General Settings
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Profile Settings" secondary="Update your profile information" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Notifications" secondary="Manage your notification preferences" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Privacy" secondary="Adjust your privacy settings" />
        </ListItem>
      </List>

      <Typography variant="h4" gutterBottom mt={4}>
        Account Settings
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Change Password" secondary="Update your account password" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Email Preferences" secondary="Manage your email subscription settings" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Delete Account" secondary="Permanently delete your account" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Settings;
