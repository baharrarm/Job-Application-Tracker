import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/jobs')
      .then(response => setJobs(response.data))
  }, [])
  return (
    <>
      <Typography variant='h3'>jobs</Typography>
      <List>
        {jobs.map((job) => (
          <ListItem key={job.id}>
            <ListItemText>{job.positionTitle}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
