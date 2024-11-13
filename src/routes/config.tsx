import { Transactions } from '@pages/index';
import { RoutesEnum } from './routes';
import { useRoutes } from 'react-router-dom';

export const RouteConfig = () => {
  const routes = useRoutes([
    {
      path: RoutesEnum.Home,
      element: <Transactions />,
    },
  ]);

  return routes;
};
