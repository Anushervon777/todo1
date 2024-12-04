import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { cardActionAreaClasses } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '',
  boxShadow: 0,
  p: 4,
};


export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [data, setData] = useState([
    { name: 'Frozen yoghurt', calories: 159, fat: "6.0", carbs: 24, protein: 4.0, id: 1 },
    { name: 'Frozen yoghurt', calories: 159, fat: "6.0", carbs: 24, protein: 3.0, id: 2 },
    { name: 'Frozen yoghurt', calories: 159, fat: "6.0", carbs: 24, protein: 2.0, id: 3 },

  ])
  function del(id) {
    setData(data.filter((el) => el.id != id))
  }
  function editt(el) {

  }
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <TableRow
              key={el.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {el.name}
              </TableCell>
              <TableCell align="right">{el.calories}</TableCell>
              <TableCell align="right">{el.fat}</TableCell>
              <TableCell align="right">{el.carbs}</TableCell>
              <TableCell align="right">{el.protein}</TableCell>
              <TableCell align='right'><div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                >
                 <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" style={{backgroundColor:"white"}} label="Outlined" variant="outlined" />
      <TextField id="filled-basic" style={{backgroundColor:"white"}} label="Filled" variant="filled" />
      <TextField id="standard-basic" style={{backgroundColor:"white"}} label="Standard" variant="standard" />
    </Box>
                </Modal>
              </div> <DeleteIcon onClick={() => { del(el.id) }}></DeleteIcon></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}