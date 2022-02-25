import './MenuItem.css';
import { Link } from 'react-router-dom';

export const MenuItem = (props) => {
  return <Link to={props.url}>{props.name}</Link>;
};
