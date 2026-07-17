import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import RecentlyAppliedJob from "./RecentlyAppliedJob";
import axios from "axios";

export default function RecentlyAppliedJobsList() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        axios.get<Job[]>('https://localhost:5001/api/jobs')
            .then(response => setJobs(response.data));
        //sort jobs in decending order by applied date
        //set the list to the top 5
  
    }, []);

    return (
        <Paper className="dashboard-card">
            <Box className="card-header">
                <Typography className="section-title">
                    Recently Applied
                </Typography>
                <Button size="small" className="view-all-button">
                    View all
                </Button>
            </Box>

            <Box >
                {jobs.map(job => (
                    <Box>
                    <RecentlyAppliedJob key={job.id} job={job} />
                    <Divider />
                    </Box>
                ))}
            </Box>



        </Paper>
    );
}
