import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
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

const Dashboard = () => {
  const tableExample = [
    {
      recurso: {
        id: '1',
      },
      tipo: {
        id: 'TR001',
      },
      estado: {
        des: 'RS001',
      },
      descripcion: {
        des: 'LG - ANDRIOD 11 ',
      },
      serie: {
        serie: '51C78E65GT',
      },
      asignado: {
        asig: 'Si',
      },
      activo: {
        act: 'Si',
      },
      f_creacion: {
        creacion: '14-11-2021',
      },
      f_expiracion: {
        f_exp: '14-12-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: '2',
      },
      tipo: {
        id: 'TR001',
      },
      estado: {
        des: 'RS001',
      },
      descripcion: {
        des: 'LG - ANDRIOD 11 ',
      },
      serie: {
        serie: '51C78E65GT',
      },
      asignado: {
        asig: 'Si',
      },
      activo: {
        act: 'Si',
      },
      f_creacion: {
        creacion: '14-11-2021',
      },
      f_expiracion: {
        f_exp: '14-12-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: '3',
      },
      tipo: {
        id: 'TR001',
      },
      estado: {
        des: 'RS001',
      },
      descripcion: {
        des: 'LG - ANDRIOD 11 ',
      },
      serie: {
        serie: '51C78E65GT',
      },
      asignado: {
        asig: 'Si',
      },
      activo: {
        act: 'Si',
      },
      f_creacion: {
        creacion: '14-11-2021',
      },
      f_expiracion: {
        f_exp: '14-12-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: '4',
      },
      tipo: {
        id: 'TR001',
      },
      estado: {
        des: 'RS001',
      },
      descripcion: {
        des: 'LG - ANDRIOD 11 ',
      },
      serie: {
        serie: '51C78E65GT',
      },
      asignado: {
        asig: 'Si',
      },
      activo: {
        act: 'Si',
      },
      f_creacion: {
        creacion: '14-11-2021',
      },
      f_expiracion: {
        f_exp: '14-12-2021',
      },
      acciones: {
        flag: cilPen,
        flag2: cilDelete,
      },
    },
    {
      recurso: {
        id: '5',
      },
      tipo: {
        id: 'TR001',
      },
      estado: {
        des: 'RS001',
      },
      descripcion: {
        des: 'LG - ANDRIOD 11 ',
      },
      serie: {
        serie: '51C78E65GT',
      },
      asignado: {
        asig: 'Si',
      },
      activo: {
        act: 'Si',
      },
      f_creacion: {
        creacion: '14-11-2021',
      },
      f_expiracion: {
        f_exp: '14-12-2021',
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
            <CCardHeader>Hstorial de recursos</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Recurso</CTableHeaderCell>
                    <CTableHeaderCell>Tipo</CTableHeaderCell>
                    <CTableHeaderCell>Estado</CTableHeaderCell>
                    <CTableHeaderCell>Descripcion</CTableHeaderCell>
                    <CTableHeaderCell>Serie</CTableHeaderCell>
                    <CTableHeaderCell>Asignado</CTableHeaderCell>
                    <CTableHeaderCell>Activo</CTableHeaderCell>
                    <CTableHeaderCell>Creacion</CTableHeaderCell>
                    <CTableHeaderCell>Expiraccion</CTableHeaderCell>
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
                      <CTableDataCell>
                        <div>{item.serie.serie}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.asignado.asig}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.activo.act}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.f_creacion.creacion}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.f_expiracion.f_exp}</div>
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
              <CPagination aria-label="Page navigation example" className="pt-2">
                <CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem active>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard
