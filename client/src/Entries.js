import React, { Component } from 'react';
import './App.css';
import FormSheet from "./FormSheet";

class Entries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{
                Username: " ",
                Title: " ",
                JournalEntry: " "
            }]

        }
    }

    deleteById(id){
        console.log("Delete by id"+ id);
        fetch('/entries/delete',
            {
                method: "DELETE",
                body: JSON.stringify({"id":id}),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    }

    submitChange =(event) => {

        fetch('/api/accs',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        UserName: this.state.Username,
                        UserPassword: this.state.Title,
                        UserBalance: this.state.JournalEntry,

                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
        event.stopPropagation();
    };

    render() {
        fetch('/entries/all')
            .then(data =>
                data.json())
            .then(response=> this.setState({data: response}));


        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Journal List</h1>
                </header>
                <FormSheet arr={this.state.data}
                          deleteFunction= {this.deleteById}/>
            </div>
        );
    }
}

export default Entries;