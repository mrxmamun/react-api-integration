import React, { Component } from 'react';
import axios from 'axios';
class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            axiostodos: []
        };
    }


     componentDidMount(){
         fetch("http://127.0.0.1:5000/todos/")
             .then(response => response.json()
                 .then(data => this.setState({ todos:data}))
             );

        axios({
            method:'get',
            url: 'http://127.0.0.1:5000/todos/'
        }).then(response => this.setState({ axiostodos: response.data }))
             

     }
 
    render() {
        let { todos, axiostodos} = this.state;
      

       
        return (
          <div className="container">

                {todos.map((todo , index)=>
              <div key={index}>
                      <h1> {todo.title}</h1>
                        <p> {todo.body}</p>
                    </div>
              
              )

              }
                {axiostodos.map((todo, index) =>
                    <div key={index}>
                        <h1> {todo.title}</h1>
                        <p> {todo.body}</p>
                    </div>

                )

                }
                         
          </div>

        );
    }
}

export default Api;
