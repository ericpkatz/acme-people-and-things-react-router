import Faker from 'faker';
class Store{
  constructor(){
    console.log('constructing');
    this.subscribers = [];
    this.people = [
      { id: 1, name: 'Moe' }
    ];
  }
  load(){
    this.broadcast({ people: this.people });
  }
  subscribe(fn){
    this.subscribers.push(fn);
    return ()=> this.subscribers = this.subscribers.filter( subscriber => subscriber !== fn);
  }
  broadcast(payload){
    this.subscribers.forEach( subscriber => subscriber(payload));
  }
  createPerson(){
    this.people.push({ id: Math.random(), name: Faker.name.firstName() });
    this.broadcast({ people: this.people });
  }
  destroyPerson(id){
    console.log(id);
    this.people = this.people.filter( person => person.id !== id );
    this.broadcast({ people: this.people });
  }
}
const store = new Store();

export default store;
