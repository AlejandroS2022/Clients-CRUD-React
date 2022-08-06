import {
    DataGrid,
    GridActionsCellItem,
} from '@mui/x-data-grid';
import SearchBar from './components/SearchBar/searchBar';
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/DeleteOutlined"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAll, remove } from "../../features/client/clientSlice";
import RegisterButton from './components/RegisterButton/registerButton';
import "./table.styles.css";

const filterData = (query, data) => {
    if (query === "") {
        return data;
    } else {
        return data.filter((d) => (
            d.nombre.toLowerCase().includes(query) ||
            d.apellido.toLowerCase().includes(query) ||
            d.cedula.toLowerCase().includes(query) ||
            d.fecha_nacimiento.toLowerCase().includes(query)
        ));
    }
};

const Table = () => {
    const clients = useSelector((state) => state.client.data);
    const searchQuery = useSelector((state) => state.filter.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataFiltered = filterData(searchQuery, clients);

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);
    
    const handleEdit = (id) => () => {
        navigate(`/editar/${id}`);
    };
    
    const handleDelete = (id) => () => {
        dispatch(remove({
            id: id
        }));
        dispatch(getAll());
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'nombre',
            headerName: 'Nombre',
            width: 250,
            editable: true
        },
        {
            field: 'apellido',
            headerName: 'Apellido',
            width: 250,
            editable: true
        },
        {
            field: 'cedula',
            headerName: 'Cédula',
            width: 200,
            editable: true
        },
        {
            field: 'sexo',
            headerName: 'Sexo',
            width: 100,
            editable: true
        },
        {
            field: 'fecha_nacimiento',
            headerName: 'Fecha de Nacimiento',
            type: 'date',
            width: 250,
            editable: true
        },
        {
            field: 'actions',
            headerName: 'Acciones',
            type: 'actions',
            width: 150,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                      icon={<EditIcon />}
                      label="Editar"
                      onClick={handleEdit(id)}
                    />,
                    <GridActionsCellItem
                      icon={<DeleteIcon />}
                      label="Eliminar"
                      onClick={handleDelete(id)}
                    />,
                ];
            },
        },
    ];

    return(
        <div className="table-div">
            <SearchBar />
            <DataGrid
                rows={dataFiltered}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            <RegisterButton/>
        </div>
    );
};

export default Table;