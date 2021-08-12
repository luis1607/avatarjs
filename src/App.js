
import React,{Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/Counters'
import Counter from './components/counter';
import Dialog from './components/Dialog'



class App extends Component {

  state = { 
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
    ]
 }

 constructor(){
   super();
   console.log('App - Constructor')
   this.input = React.createRef();
 }

 componentDidMount(){//Ajax call
   console.log('App - DidMount')
 }
 handleSubmit= (event) => {
  event.preventDefault();
  console.log('dato de componente no controlado' + this.input.current.value);
}

 handleIncrement = counter =>{
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = { ...counter};
     counters[index].value++;
     this.setState({counters})
 }

 handleReset = () => {
     const counters = this.state.counters.map(c =>{
         c.value = 0;
         return c
     })
     this.setState({counters})
 }

 handleDelete = (counterId) =>{
    const counters = this.state.counters.filter(c=> c.id != counterId);
    this.setState({counters:counters})
 }

 render(){
  console.log('App - Render')
  return (
    <React.Fragment>
    <NavBar 
    totalCounter={this.state.counters.filter(c=>c.value>0).length}
    />
    <main className="container">
      <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
    
      />
    </main>

    <form onSubmit={this.handleSubmit}>
            <h4>Este es formulario para probar el ref</h4>
          <label>
            Name:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit"/>
        </form>


    {/* Este dislog es para probar composicion o herencia */}
    <Dialog 
    title="Buenos dias" 
    subtitle="Como estan">
      <label>Nombre</label>
      <input />
      <span>Ingrese porfavor caracteres</span>
      
    </Dialog>
    </React.Fragment>
  );
}
}

export default App;




/* class ComponenteNoControlado extends Component{
  constructor(props) {
      super(props);
      //this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }
  
    handleSubmit(event) {
      console.log('dato de componente no controlado' + this.input.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h4>Este es formulario para probar el ref</h4>
          <label>
            Name:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      );
    }
} */
