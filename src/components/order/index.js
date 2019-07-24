import { renderRoutes } from 'react-router-config';
import routes from './routes';

const Order = ({ route }) => renderRoutes(routes(route.path));

export default Order;
