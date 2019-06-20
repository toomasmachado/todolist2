import React, {Component} from 'react';
import TodoItems from './TodoItems.js';
import './TodoList.css'

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.deleteAll = this.deleteAll.bind(this);

    }

    addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) =>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";

        console.log(this.state.items)

        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    deleteAll(){
        this.setState({
            items:[]
        });
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Digite uma tarefa">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div> 
                <div className="body"> 
                    <TodoItems entries={this.state.items}
                    delete={this.deleteItem}/> 
                </div>
                <div className="footer">   
                    <button type="submit" onClick={this.deleteAll}>Limpar Lista</button>
                 </div>                 
            </div>
        );
    }
}

export default TodoList;