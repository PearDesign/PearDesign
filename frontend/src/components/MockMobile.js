import React, { Component } from 'react'; 

export class MockMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.image,
        }
    }

    render () {
        return (
            <div className="MockMobile">
                <div className="MockMobile__image" style={{ backgroundImage: this.state.image }}></div>
            </div>
        )
    }
}