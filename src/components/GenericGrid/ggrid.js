import React from 'react'; 
import {AgGridReact} from 'ag-grid-react'; 

class GenericGrid extends React.Component {
    
    
    render() {

        const { columnDefs, rowData, onGridReady, enableSorting, enableFilter, style } = this.props; 
        return (
            <div style={style} className="ag-fresh">
                <AgGridReact
                    // properties
                    columnDefs={columnDefs}
                    rowData={rowData}
                    onGridReady={onGridReady}
                    enableSorting={enableSorting}
                    enableFilter={enableFilter}
                >
                </AgGridReact>
            </div>
        )
    }
};
export default GenericGrid;