import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './router';
import Loader from "../components/Loader"


const RenderRoutes = (routes: any) => {
    return routes.map((route: any) => {
        const { child, path } = route;

        if (child && child.length) {
            return [
                <Route key={route.id} path={path} element={<route.element />} >
                    {...RenderRoutes(child)}
                </Route>
            ];
        }
        return <Route key={route.id} path={path} element={<route.element />} />;
    });
}
const LazyRouter = React.memo(() => {
    const memoizedRoutes = useMemo(() => RenderRoutes(routes), [routes]);
    return (
        <Suspense fallback={<Loader />}>
            <Routes>{memoizedRoutes}</Routes>
        </Suspense>
    );
});
export default LazyRouter;