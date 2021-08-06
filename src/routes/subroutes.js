import React from 'react';


const InstituteView = React.lazy(() => import('../pages/InstitituteView/InstituteView'))
const subRoutes = [
             // institiute routes
    { path: '/institute/:id', exact: false, name: 'Institutes', component: InstituteView, },
]
export default subRoutes