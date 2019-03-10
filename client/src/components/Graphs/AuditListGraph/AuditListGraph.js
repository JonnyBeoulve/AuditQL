import React from 'react';
import { AgGridReact } from 'ag-grid-react';

/* This will display a list of audits and their associated data using AG Grid. */
const AuditListGraph = ({ data }) => {
    
    const columnDefs = [{
        headerName: 'Title',
        field: 'title'
    }, {
        headerName: 'Genre',
        field: 'genre'
    }, {
        headerName: 'Status',
        field: 'status'
    }]
    

    console.log(data);
    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '400px',
                width: '100%'
            }}
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={data}>
            </AgGridReact>
        </div>
    )
}

export default AuditListGraph;