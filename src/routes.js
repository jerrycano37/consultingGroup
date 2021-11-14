import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/recursos', name: 'Recursos', component: Dashboard },
  { path: '/usuarios', name: 'Usuarios', component: Colors, exact: true },
  { path: '/usuarios/administrar', name: 'Administrar', component: Colors },
  { path: '/estados', name: 'Estados', component: Cards, exact: true },
  { path: '/estados/gestionar', name: 'Gestionar', component: Accordion },
  { path: '/tipos', name: 'Tipos', component: Buttons, exact: true },
  { path: '/tipos/gestionar', name: 'Gestionar', component: Buttons },
]

export default routes
