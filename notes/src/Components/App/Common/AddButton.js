import React, { Component } from 'react';


class AddButton extends Component{

    constructor(props){
        super();
    }


    render() {
        return ( 
            <div className="add-note-button">
        
                <button 
                    className="btn" 
                    type="button"
                    onClick={this.props.onClickHandler}
                    >
                    <div className="add-btn fa-3x fas fa-plus-circle"></div>
                </button>  
            </div>
        )
    } 
}

export default AddButton;