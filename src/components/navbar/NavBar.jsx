import './NavBar.css';
import { MenuItem } from './menu-item/MenuItem';
import { Button } from '@mui/material';
import cameliaLogo from '../../assets/common/camelia-logo.png';
import { ShoppingCartWidget } from './cart-widget/CartWidget';

const iniciaSesionClick = (e) => {
  e.preventDefault();
  alert('Próximamente');
};

export function NavBar(props) {
  return (
    <nav role="navigation">
      <ul>
        <li>
          <img src={cameliaLogo} className="logo" alt="Camelia" />
        </li>
        <li>
          <MenuItem url="/inicio" name="Home" />
        </li>
        <li>
          <MenuItem url="/como-comprar" name="¿Cómo comprar?" />
        </li>
        <li>
          <MenuItem url="/faq" name="Preguntas frecuentes" />
        </li>
        <li className="separator">&#124;</li>
        <li>
          <MenuItem url="/registrate" name="Regístrate" />
        </li>
        <li>
          <Button
            variant="outlined"
            style={{ color: 'white', borderColor: '#AC8F76' }}
            href="inicia-sesion"
            onClick={iniciaSesionClick}
          >
            Inicia Sesión
          </Button>
        </li>
      </ul>
      <div className="shopping-cart-widget">
        <ShoppingCartWidget cartCount={props.cartCount} />
      </div>
    </nav>
  );
}
