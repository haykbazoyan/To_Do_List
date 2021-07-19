import React from 'react';
import Button from '../Button/Button';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            def: 1
        }
    }

    handleClick = () => {
        this.setState((lastVal) => ({
            def: lastVal.def + 1,
        }));
        console.log(this.state.def)
    }

    render() {
        return (
            <Button onClick={this.handleClick} isDisable="false" btnName="Add"/>
        );
    }  
}