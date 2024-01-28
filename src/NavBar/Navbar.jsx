import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import
import MainLogo from "../Icons/logo-rackext-svgrepo-com.svg"
import ProfileIco from "../Icons/Profile.svg"
import MyTransIco from "../Icons/Trans.svg"
import MyFdIco from "../Icons/MyFd.svg"
import LogOutIco from "../Icons/Logout.svg"

const pages = ['Dashboard', 'FAQs', 'Support'];
function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar style={{ backgroundColor: "#fff", height: "10vh", borderBottom: "1px solid gray" }} position="static">
            <Container maxWidth="xxl">
                <Box mt={3} display='flex' alignItems="center" justifyContent="space-between">
                    <Box ml={4}>
                        <img src={MainLogo} alt="main-logo" />
                    </Box>
                    <Box display="flex" alignItems="center" mr={3}>
                        <Box display="flex" gap={10} mr={5}>
                            {pages.map((page) => {
                                return (
                                    <Typography variant='subtitle' style={{ color: "black", fontWeight: "bold", cursor: "pointer" }} textAlign="center">{page}</Typography>
                                )
                            })}
                        </Box>
                        <Tooltip title="Account settings">
                            <IconButton
                                style={{ height: "50px", width: "80", border: "1px solid #4A4ED4", borderRadius: "30px" }}
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Box display="flex" alignItems="center" p={2}>
                                    <PersonIcon style={{ color: "#4A4ED4" }} />
                                    <ExpandMoreIcon style={{ color: "#4A4ED4" }} />
                                </Box>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Avatar src={ProfileIco} /> <Typography style={{ fontWeight: "bold" }}>My Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar src={MyTransIco} /> <Typography style={{ fontWeight: "bold" }}> My FDs</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar src={MyFdIco} /><Typography style={{ fontWeight: "bold" }}>My Transactions</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar src={LogOutIco} /><Typography style={{ fontWeight: "bold" }}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </AppBar >
    );
}
export default NavBar;