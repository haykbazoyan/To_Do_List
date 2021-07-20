import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }
    }

    handleClick = (e) => {
        this.setState((lastVal) => ({
            inputValue: e.target.value
        }));
        console.log('value', this.state.inputValue)
    }

    setInputValue = (e) => {
        this.setState(() => ({
            inputValue: e.target.value
        }));
    }

    render() {
        return (
            <div>
                <Input value={this.state.inputValue} type="text" placeholder="Add what to Do" onChange={this.setInputValue} />
                <Button onClick={this.handleClick} isDisable="false" btnName="Add"/>
            </div>
            
        );
    }  
}