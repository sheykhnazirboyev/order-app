import { Container, Paper } from "@mui/material";
import DataTable from "./DataTable";
import CreateOrder from "./CreateOrder";

function Home() {
  return (
    <Container>
      <CreateOrder />
      <Paper>
        <DataTable />
      </Paper>
    </Container>
  );
}

export default Home;
