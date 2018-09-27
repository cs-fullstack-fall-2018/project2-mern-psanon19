import React, { Component } from 'react';


class FormPosts extends Component {
    constructor(props){
        super(props);
        this.state = {Username: " ",
            Title: " ",
            JournalEntry: " "}
    }



    submitChange =(event) => {

        fetch('/submit/journal',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        Username: this.state.Username,
                        Title: this.state.Title,
                        JournalEntry: this.state.JournalEntry,
                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
        event.stopPropagation();
    };

    nameTitleChange = (event) => {
        this.setState({Username: event.target.value})
    };

    passwordChange = (event) => {
        this.setState({Title: event.target.value})
    };

    balanceChange = (event) => {
        this.setState({JournalEntry: event.target.value})
    };


    submitFunction = (event) =>{
        console.log("Submitted Form.");
        document.getElementById("PatientWriteDown").innerHTML+=
            // console.log
            ("Hello "+this.state.UserName+". Your password is "+this.state.UserPassword+" and you're Balance is "+this.state.UserBalance+`<br/>`);

        //This prevent the form from reloading
        event.preventDefault();
        event.stopPropagation();
    };

    render() {

        return (
            <div>
                <form onSubmit={this.submitChange}>
                    <br/>
                    <input name="Patient_Title_Information" type="Text" maxLength='18' placeholder="Username" value={this.state.UserName} onChange={this.nameTitleChange} required/>
                    <input name="Patient_Age_Rating" type="Text" maxLength='18' placeholder="Journal Title" value={this.state.UserPassword} onChange={this.passwordChange} required/>
                    <br/><br/>
                    <textarea rows="4" cols="50" placeholder="Type your Journal entry here" value={this.state.UserBalance} onChange={this.balanceChange}/>
                    <br/>
                    <button title="Submit Button" onSubmit={this.submitFunction}>Submit</button>
                </form>

            </div>
        );

    }
}

export default FormPosts