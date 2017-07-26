import React from 'react'; 
import {AgGridReact} from 'ag-grid-react'; 
import GenericGrid from '../GenericGrid/ggrid';
import Filter from '../Filter/filter';

class SGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData(),
            count: 3,
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        return [
            {headerName: "Source ID", field: "id"},
            {headerName: "Source name", field: "name"},
            {headerName: "AORO", field: "aoro"}
        ];
    }

    createRowData() {
        return [
            {id: "OL_2311", name: "obligation name 1", aoro: "Tabarini, Alyssa (I616205)"},
            {id: "OL_2211", name: "obligation name 2", aoro: "Clark, John (I616205)"},
            {id: "OL_2452", name: "obligation name 3", aoro: "Smith, Bob (I616205)"},
         
        ];
    }

    render() {
        let containerStyle = {
            height: 500,
            width: 500
        };

        

        // return (
        //     <div style={containerStyle} className="ag-fresh">
        //         <AgGridReact
        //             // properties
        //             columnDefs={this.state.columnDefs}
        //             rowData={this.state.rowData}

        //             // events
        //             onGridReady={this.onGridReady}
        //             enableSorting
        //             enableFilter
        //         >
        //         </AgGridReact>
        //     </div>
        // )


        return (
            <div className="obligationScreen"> 

                <div className="filterArea">
                <Filter/>
                </div>

                <div className="obligationArea">
                
                    <div className="gridHeader">
                        <h1 className="obName"> Sources </h1>
                        <h1 className="count">{this.state.count}</h1>
                        </div> 

                    
                    <div className="gridArea">
                        <GenericGrid
                        // properties
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        onGridReady={this.onGridReady}
                        enableSorting={true}
                        enableFilter={true}
                        style={containerStyle}
                    >
                    </GenericGrid>
                      </div>
                </div>
             </div> 
        )
    }
};
export default SGrid;