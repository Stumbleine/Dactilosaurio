import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  FormControl,
} from "@mui/material";
import { indigo, grey, orange } from "@mui/material/colors";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];

export default function SendTextForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Enviar texto
      </Button>
      <FormControl>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Enviar Texto</DialogTitle>
          <DialogContent>
            <DialogContentText>
              El texto enviado sera evaluado y posteriormente puesto en las
              practicas y partidas multijugador.
            </DialogContentText>
            <TextField
              helperText="Es necesario el titulo"
              autoFocus
              margin="dense"
              id="name"
              label="Titulo del libro"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ borderColor: grey[900] }}
            />
            <TextField
              autoFocus
              helperText="Es necesario el autor"
              margin="dense"
              id="name"
              label="Autor"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              helperText="Es necesario el parrafo y debe ser menor a 400 caracteres"
              margin="dense"
              id="name"
              label="Texto / Parrafo"
              type="text"
              fullWidth
              variant="outlined"
              multiline
            />
          </DialogContent>
          <DialogActions sx={{ mr: 1, mb: 1 }}>
            <Button onClick={handleClose}>Cerrar</Button>
            <Button variant="contained" onClick={handleClose}>
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      </FormControl>
    </div>
  );
}
