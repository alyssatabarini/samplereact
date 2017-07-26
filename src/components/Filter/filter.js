import React from 'react';
import './filter.css';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     name: 
        //     filterOptions: 
        //     filterOn:
        // }


        // this.rows = //json data
        // this.state = {
        //     filteredDataList: this.rows

        // createFilterNames() {
        // return [
        //     {headerName: "Obligation ID", field: "id"},
        //     {headerName: "Obligation name", field: "name"},
        //     {headerName: "AORO", field: "aoro"}
        //      ];
        //  }
        
        // createFiltersOptions() {
        // return [
        //     {headerName: "Obligation ID", field: "id"},
        //     {headerName: "Obligation name", field: "name"},
        //     {headerName: "AORO", field: "aoro"}
        //      ];
        //  }

        //  onClearFilters() {
        // // all filters removed
        // this.setState({filters: {} });
 
    }




//make one filter component and run a loop and create mulitple filters 
    render() {
        return(
           <div className="filterArea">
                <div className="filterArea1"> </div> 
                <div className="filterArea2"> </div> 
                <div className="filterArea3"> </div> 
            </div> 

        )
    }
}

export default Filter; 