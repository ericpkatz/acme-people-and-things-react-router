import React, { Component } from 'react';
import store from '../store.js';


const PeopleStatus = ({ count } )=> <div className='well'>There are { count } people</div>


class People extends Component{
  constructor(config){
    super(config);
    this.state = { people: [] };
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe((state)=> this.setState(state));
    store.load();
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    let button;
    if(this.state.people.length < 5){
      button = <button className='btn btn-primary' onClick={ store.createPerson.bind(store) }>Add</button>;
    }

    const lis = this.state.people.map( person => <li onClick={ ()=> store.destroyPerson(person.id)} className='list-group-item' key={ person.id }>{ person.name }</li> );
    return (
        <div>
          <PeopleStatus count={ this.state.people.length } />
          <br />
          <div className='form-group'>
            { button }
          </div>
          <ul className='list-group'>
            { lis }
          </ul>
         </div>
    );
  }
}

export default People;
