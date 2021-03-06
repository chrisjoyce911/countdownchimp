import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2020',
            newDeadline: ''
        }
    }

    changeDeadline() {
        console.log('state', this.state);
        this.setState({ deadline: this.state.newDeadline });
    }

    render() {
        return (
            <div className='App'>
                <div className='App-title'>{this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}></Clock>
                <Form inline>
                    <FormControl
                        className='Deadline-input'
                        placeholder='new date'
                        onChange={event => this.setState({ newDeadline: event.target.value })}></FormControl>
                    <Button onClick={() => this.changeDeadline()}>
                        Submit
                        </Button>
                </Form>
            </div>
        )
    }
}

export default App;