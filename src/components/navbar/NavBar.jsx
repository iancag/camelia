import "./NavBar.css"
import cameliaLogo from "../../assets/common/camelia-logo.png"
import { MenuItem } from "./components/MenuItem";
import { Button } from "@mui/material";

const iniciaSesionClick = (e) => {
    e.preventDefault();
    alert("Próximamente");
}

export function NavBar() {
    return <nav role="navigation">
        <ul>
            <li><img src={cameliaLogo} className="logo" alt="Camelia" /></li>
            <li><MenuItem url="/inicio" name="Home" /></li>
            <li><MenuItem url="/accesorios" name="Accesorios" /></li>
            <li><MenuItem url="/como-rentar" name="¿Cómo rentar?" /></li>
            <li><MenuItem url="/faq" name="Preguntas frecuentes" /></li>
            <li className="separator">&#124;</li>
            <li><MenuItem url="/registrate" name="Regístrate" /></li>
            <li><Button variant="outlined" style={{color:"white", borderColor:"#AC8F76"}} href="inicia-sesion" onClick={iniciaSesionClick}>Inicia Sesión</Button></li>
        </ul>
    </nav>;
}

