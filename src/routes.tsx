import { lazy, LazyExoticComponent, Suspense } from 'react';
import Home from '@/pages/Home';

const Loadable = (Component: LazyExoticComponent<React.FC>) => (props: React.Attributes) => (
  <Suspense fallback={<div />}>
    <Component {...props} />
  </Suspense>
);

const Layout = Loadable(lazy(() => import('./Layout')));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  }
];

export default routes;
