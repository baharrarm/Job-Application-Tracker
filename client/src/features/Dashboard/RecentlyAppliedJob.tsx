import { Avatar, Box, Chip, Typography } from "@mui/material";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

type Props = {
  job: Job;
}

export default function RecentlyAppliedJob({ job }: Props) {
  return (
    <Box className="job-row">

      <Avatar className="job-avatar icon-green">
        <BusinessCenterOutlinedIcon fontSize="small" />
      </Avatar>
      <Box className="job-info">
        <Typography className="job-company">
          {job.companyName}
        </Typography>
        <Typography className="job-role">
          {job.positionTitle}
        </Typography>
      </Box>
      <Box className="job-meta">
        <Typography className="job-date">
          {job.dateApplied}
        </Typography>
        <Chip label="Applied" size="small" className="status-chip" />
      </Box>

      
    </Box>
  )
}