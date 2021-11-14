import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPen, cilDelete, cilNoteAdd } from '@coreui/icons'

const Accordions = () => {
  const tableExample = [
    {
      recurso: {
        id: 'RS001',
      },
      tipo: {
        id: 'Nuevo',
      },
      estado: {
        des: 'Equipo Nuevo',
      },
      descripcion: {
        des: '14-11-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: 'RS001',
      },
      tipo: {
        id: 'Nuevo',
      },
      estado: {
        des: 'Equipo Nuevo',
      },
      descripcion: {
        des: '14-11-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: 'RS001',
      },
      tipo: {
        id: 'Nuevo',
      },
      estado: {
        des: 'Equipo Nuevo',
      },
      descripcion: {
        des: '14-11-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: 'RS001',
      },
      tipo: {
        id: 'Nuevo',
      },
      estado: {
        des: 'Equipo Nuevo',
      },
      descripcion: {
        des: '14-11-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: 'RS001',
      },
      tipo: {
        id: 'Nuevo',
      },
      estado: {
        des: 'Equipo Nuevo',
      },
      descripcion: {
        des: '14-11-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
  ]

  return (
    <>
      <CButton color="info" className="m-1">
        <CIcon icon={cilNoteAdd} /> Agregar
      </CButton>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Hstorial de usuarios</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Identificador</CTableHeaderCell>
                    <CTableHeaderCell>Estado</CTableHeaderCell>
                    <CTableHeaderCell>Nombre</CTableHeaderCell>
                    <CTableHeaderCell>Fecha</CTableHeaderCell>
                    <CTableHeaderCell>Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.recurso.id}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.tipo.id}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.estado.des}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.descripcion.des}</div>
                      </CTableDataCell>
                      <CTableDataCell className="p-1">
                        <CButton color="info" className="m-1">
                          <CIcon icon={item.acciones.flag} />
                        </CButton>
                        <CButton color="info" className="m-1">
                          <CIcon icon={item.acciones.flag2} />
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Accordions
