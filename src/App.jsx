import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Diagnostics from "./pages/Diagnostics";
import Analyzes from "./pages/Analyzes";
import Stock from "./pages/Stock";
import Patients from "./pages/Patients";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Layout from "./component/Layout";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import FilterStatus from "./component/FilterStatus";
// import FilterAllCity from "./component/FilterAllCity";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Typography,
  Stack,
  Container,
  TextField,
  Button,
  Avatar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material/";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/analyzes" element={<Analyzes />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
