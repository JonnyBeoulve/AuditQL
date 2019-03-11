import React from 'react';
import { AgGridReact } from 'ag-grid-react';

/* This will display a list of audits and their associated data using AG Grid. */
const AuditListGraph = ({ data, selectAudit }) => {
    const columnDefs = [
        {
            headerName: 'Title',
            field: 'title',
            sortable: true,
            filter: true,
        }, {
            headerName: 'Genre',
            field: 'genre',
            sortable: true,
            filter: true,
        }, {
            headerName: 'Status',
            field: 'status',
            sortable: true,
            filter: true,
        }, {
            headerName: 'View More',
            field: 'id',
            cellRenderer: (params) => {
                return (
                    `<a href="/#/audit/${params.value}">Details</a>`
                )
            }
        }
    ]
    
    const defaultColDef = {
        width: 220,
        editable: true,
        filter: 'agTextColumnFilter'
    };
    
    return (
        <div
            className="ag-theme-balham"
            style={{
                display: 'block',
                marginBottom: '40px',
                height: '400px',
                width: '100%',
            }}
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={data}
                defaultColDef={defaultColDef}
            >
            </AgGridReact>
        </div>
    )
}

export default AuditListGraph;