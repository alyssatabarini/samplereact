import React from 'react'; 
import Modal from 'react-modal';
import './modal.css';



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
                <div className="ModalHeader">
                <h1> This is a modal </h1>
                </div>

                <button onClick={this.closeModal}>close</button>
            </Modal>
            </div>
        )
    };
}
    

export default ModalExample; 



