import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../features/client/clientSlice";
import { useNavigate } from 'react-router-dom';
import FormHeader from "./components/formHeader"
import "./formPage.styles.css";

const RegisterPage = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [fecha_nacimiento, setFecha] = useState('');
  const [sexo, setSexo] = useState('M');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const saveSubmit = (e) => {
    e.preventDefault();
    dispatch(create({ 
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        sexo: sexo,
        fecha_nacimiento: fecha_nacimiento
    }));
    navigate("/");
  }
  
  return(
    <div className="page-div">
      <FormHeader title="Registrar cliente" />
      <form onSubmit={saveSubmit}>
        <Grid container>
          <Grid item className="form-field" xs={12}>
            <TextField
              id="nombre"
              className="text"
              label="Nombre"
              variant="outlined"
              placeholder="Nombre"
              size="small"
              fullWidth={true}
              value={ nombre }
              onChange={ (e) => setNombre(e.target.value) }
              style={{backgroundColor: "white"}}
            />
          </Grid>
          <Grid item className="form-field" xs={12}>
            <TextField
              id="apellido"
              className="text"
              label="Apellido"
              variant="outlined"
              placeholder="Apellido"
              size="small"
              fullWidth={true}
              value={ apellido }
              onChange={ (e) => setApellido(e.target.value) }
              style={{backgroundColor: "white"}}
            />
          </Grid>
          <Grid item className="form-field" xs={12}>
            <TextField
              id="cedula"
              className="text"
              label="Cédula"
              variant="outlined"
              placeholder="Cédula"
              size="small"
              fullWidth={true}
              value={ cedula }
              onChange={ (e) => setCedula(e.target.value) }
              style={{backgroundColor: "white"}}
            />
          </Grid>
          <Grid item className="form-field" xs={12}>
            <TextField
              id="fecha_nacimiento"
              className="text"
              variant="outlined"
              size="small"
              type="date"
              fullWidth={true}
              value={ fecha_nacimiento }
              onChange={ (e) => setFecha(e.target.value) }
              style={{backgroundColor: "white"}}
            />
          </Grid>
          <Grid item className="form-field" xs={6}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sexo}
              label="Sexo"
              onChange={ (e) => setSexo(e.target.value) }
              size="small"
              fullWidth={true}
              style={{backgroundColor: "white"}}
            >
              <MenuItem value={"M"}>Masculino</MenuItem>
              <MenuItem value={"F"}>Femenino</MenuItem>
              <MenuItem value={"O"}>Otros</MenuItem>
            </Select>
          </Grid>
          <Grid item className="form-field" xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default RegisterPage;