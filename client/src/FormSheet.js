import React, { Component } from 'react';


class FormSheet extends Component {

    render() {

        var forEachItem = this.props.arr.map(
            eachItem => {
                return (
                    <div>
                        <h1 align="left">{eachItem.Title}</h1>
                        <p align="left">By: {eachItem.Username}</p>
                        <p align="left">{eachItem.JournalEntry}</p>
                        <h6>{eachItem.Date}</h6>
                        <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>

                        <hr/>
                    </div>


                )
            }
        );

        return (
            <div>
                <h2>{forEachItem}</h2>
            </div>
        );
    }
}


export default FormSheet

