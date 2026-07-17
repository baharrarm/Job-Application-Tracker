import { Box, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import React from "react";

export default function SideBar() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    const navItemSx = {
        borderRadius: 2,
        minHeight: 40,
        px: 1.5,
        color: '#5f6f89',
        '& .MuiListItemIcon-root': {
            color: '#8a97aa',
            minWidth: 34,
        },
        '& .MuiListItemText-primary': {
            fontSize: 13,
            fontWeight: 600,
        },
        '&.Mui-selected': {
            backgroundColor: '#edf4ff',
            color: '#2563eb',
        },
        '&.Mui-selected:hover': {
            backgroundColor: '#e3efff',
        },
        '&.Mui-selected .MuiListItemIcon-root': {
            color: '#2563eb',
        },
    };

    const utilityItemSx = {
        ...navItemSx,
        '&:active': {
            backgroundColor: '#edf4ff',
            color: '#2563eb',
        },
        '&:active .MuiListItemIcon-root': {
            color: '#2563eb',
        },
    };

    return (
        <Paper sx={{
            width: 224,
            height: '100vh',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            py: 3,
            borderRadius: 0,
            boxShadow: 'none',
            borderRight: '1px solid #edf0f5',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <BusinessCenterIcon sx={{ fontSize: 24, color: '#2563eb' }} />
                <Typography variant="subtitle1" sx={{ color: '#2563eb', fontWeight: 700 }}>
                    JobTracker
                </Typography>
            </Box>

            <Box>
                <List component="nav" sx={{ p: 0 }}>
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={() => handleListItemClick(0)}
                        sx={navItemSx}
                    >
                        <ListItemIcon>
                            <DashboardOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={() => handleListItemClick(1)}
                        sx={navItemSx}
                    >
                        <ListItemIcon>
                            <StickyNote2OutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Applications" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={() => handleListItemClick(2)}
                        sx={navItemSx}
                    >
                        <ListItemIcon>
                            <AddCircleOutlineOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Add Job" />
                    </ListItemButton>
                </List>
            </Box>

            <Box sx={{ mt: 'auto' }}>
                <List sx={{ p: 0 }}>
                    <ListItemButton sx={utilityItemSx}>
                        <ListItemIcon>
                            <SettingsOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton sx={utilityItemSx}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
            </Box>
        </Paper>
    )
}
