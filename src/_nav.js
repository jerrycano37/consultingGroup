import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCursor, cilDrop, cilPuzzle, cilSpeedometer, cilStar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Recursos',
    to: '/recursos',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Usuarios',
  },
  {
    component: CNavItem,
    name: 'Administrar',
    to: '/usuarios/administrar',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'PARAMETROS',
  },
  {
    component: CNavGroup,
    name: 'Estados',
    to: '/estados',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Gestionar',
        to: '/estados/gestionar',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Tipos',
    to: '/tipos',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Gestionar',
        to: '/tipos/gestionar',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Opciones',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ayuda',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Configurar',
        to: '#',
      },
    ],
  },
]

export default _nav
