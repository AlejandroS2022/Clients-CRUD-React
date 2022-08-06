import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = ({title}) => {
    return(
        <header>
            <AppBar className="header">
                <Toolbar>
                    <Typography variant="h6" component="h1" className="logo">
                        <Link to="/" className="link">
                            {title}
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;