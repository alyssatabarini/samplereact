import React from 'react'; 
import Modal from 'react-modal';



class ModalExample extends React.Component {
    constructor(props) {
        super(props);

    this.state ={
        isOpen: false,
     }

    }

    openModal = () => {
        this.setState({ isOpen: true });

        // this.setState = () => {
        //     return ({
        //         this.state.isOpen = true;
        //     })
        // }
    }
    
    closeModal = () => {
        this.setState({ isOpen: false });
    }


    render() {
        return(
            <div>
            <button className="modalButton" onClick = {this.openModal}> Click Me </button> 
            <Modal
                isOpen={this.state.isOpen}
                >

                <button onClick={this.closeModal}>close</button>
            </Modal>
            </div>
        )
    };
}
    

export default ModalExample; 



