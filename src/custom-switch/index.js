
import React, { Component } from 'react';
import { SwitchSelected, SwitchNotSelected } from './images'


class CustomSwitch extends Component {

    render() {
        return (
            <div onClick ={this.props.handleClik}>
                {this.props.model ?
                    (
                        <SwitchSelected color={this.props.colorbarSelected} />

                    ) : 
                    (
                        <SwitchNotSelected />

                    )}
            </div>
        )
    }



}

export default CustomSwitch;