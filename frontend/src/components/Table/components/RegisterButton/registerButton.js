import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Link } from "react-router-dom";
import "./registerButton.styles.css"

const RegisterButton = () => {
    return(
        <Link to="/registrar" className="link">
            <Button variant="contained" endIcon={<AddCircleIcon />}>
                Registrar
            </Button>
        </Link>
    )
}

export default RegisterButton;