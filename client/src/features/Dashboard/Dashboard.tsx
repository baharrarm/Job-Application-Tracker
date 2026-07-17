import { Avatar, Box, Button, Divider, Paper, Typography } from "@mui/material";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import RecentlyAppliedJobsList from "./RecentlyAppliedJobsList";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <Box sx={{
            flex: 1,
            minHeight: '100vh',
            boxSizing: 'border-box',
            bgcolor: '#f8fafc',
            px: 4,
            py: 3,
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#111827' }}>
                    Dashboard
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography sx={{ color: '#64748b', fontSize: 13 }}>
                        Good morning, Sahar!
                    </Typography>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#111827', fontSize: 14 }}>
                        S
                    </Avatar>
                </Box>
            </Box>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, minmax(130px, 1fr))',
                gap: 2,
                mb: 2,
            }}>
                <Paper className="dashboard-card">
                    <Box className="card-header">
                        <Typography className="summary-label">
                            Total Applications
                        </Typography>
                        <Box className="icon-box icon-blue">
                            <BusinessCenterOutlinedIcon fontSize="small" />
                        </Box>
                    </Box>
                    <Typography className="summary-number">
                        32
                    </Typography>
                    <Typography className="muted-text">
                        All time
                    </Typography>
                </Paper>

                <Paper className="dashboard-card">
                    <Box className="card-header">
                        <Typography className="summary-label">
                            Interviewing
                        </Typography>
                        <Box className="icon-box icon-green">
                            <HourglassEmptyOutlinedIcon fontSize="small" />
                        </Box>
                    </Box>
                    <Typography className="summary-number">
                        5
                    </Typography>
                    <Typography className="muted-text">
                        In progress
                    </Typography>
                </Paper>

                <Paper className="dashboard-card">
                    <Box className="card-header">
                        <Typography className="summary-label">
                            Offers
                        </Typography>
                        <Box className="icon-box" sx={{ bgcolor: '#f3edff', color: '#7c3aed' }}>
                            <CheckCircleOutlineOutlinedIcon fontSize="small" />
                        </Box>
                    </Box>
                    <Typography className="summary-number">
                        2
                    </Typography>
                    <Typography className="muted-text">
                        Top 6%
                    </Typography>
                </Paper>

                <Paper className="dashboard-card">
                    <Box className="card-header">
                        <Typography className="summary-label">
                            Rejected
                        </Typography>
                        <Box className="icon-box" sx={{ bgcolor: '#fff1f2', color: '#ef4444' }}>
                            <CloseOutlinedIcon fontSize="small" />
                        </Box>
                    </Box>
                    <Typography className="summary-number">
                        8
                    </Typography>
                    <Typography className="muted-text">
                        Keep going
                    </Typography>
                </Paper>

                <Paper className="dashboard-card">
                    <Box className="card-header">
                        <Typography className="summary-label">
                            Follow-ups Due
                        </Typography>
                        <Box className="icon-box" sx={{ bgcolor: '#fff7ed', color: '#f59e0b' }}>
                            <CalendarMonthOutlinedIcon fontSize="small" />
                        </Box>
                    </Box>
                    <Typography className="summary-number">
                        4
                    </Typography>
                    <Typography className="muted-text">
                        This week
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2,
            }}>
                <Paper className="dashboard-card">
                    <Box className="card-header">
                        <Typography className="section-title">
                            Follow-ups Due
                        </Typography>
                        <Button size="small" className="view-all-button">
                            View all
                        </Button>
                    </Box>

                    <Box className="job-row">
                        <Avatar className="job-avatar icon-blue">
                            <WorkOutlineOutlinedIcon fontSize="small" />
                        </Avatar>
                        <Box className="job-info">
                            <Typography className="job-company">
                                Atlassian
                            </Typography>
                            <Typography className="job-role">
                                Software Engineer
                            </Typography>
                        </Box>
                        <Box className="job-meta">
                            <Typography className="job-date">
                                May 30, 2026
                            </Typography>
                            <Typography className="muted-text">
                                Email
                            </Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box className="job-row">
                        <Avatar className="job-avatar icon-blue">
                            <WorkOutlineOutlinedIcon fontSize="small" />
                        </Avatar>
                        <Box className="job-info">
                            <Typography className="job-company">
                                Canva
                            </Typography>
                            <Typography className="job-role">
                                Frontend Developer
                            </Typography>
                        </Box>
                        <Box className="job-meta">
                            <Typography className="job-date">
                                May 31, 2026
                            </Typography>
                            <Typography className="muted-text">
                                LinkedIn Message
                            </Typography>
                        </Box>
                    </Box>
                </Paper>

                <RecentlyAppliedJobsList />
            </Box>
        </Box>
    );
}
