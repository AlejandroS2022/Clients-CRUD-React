import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getById, update } from "../../features/client/clientSlice";
import { useNavigate, useParams } from 'react-router-dom';
import FormHeader from "./components/formHeader"
import "./formPage.styles.css";

const UpdatePage = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [fecha_nacimiento, setFecha] = useState("");
  const [sexo, setSexo] = useState("M");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getById({
      id: id
    })).then(data => {
      setNombre(data.payload.nombre);
      setApellido(data.payload.apellido);
      setCedula(data.payload.cedula);
      setFecha(data.payload.fecha_nacimiento);
      setSexo(data.payload.sexo);
    }).catch(error => {
      console.log(error);
    });
  }, [dispatch, id]);
  
  const saveSubmit = (e) => {
    e.preventDefault();
    dispatch(update({
      id: id,
      nombre: nombre,
      apellido: apellido,
      sexo: sexo,
      fecha_nacimiento: fecha_nacimiento
    }));
    navigate("/");
  }
  
  const title = "Editar cliente CI-"+cedula;
  return(
    <div className="page-div">
      <FormHeader title={title} />
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

export default UpdatePage;