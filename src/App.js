import React, { Component } from 'react';
import {inject,observer} from 'mobx-react'

@inject('birdStore')
@observer
class App extends Component {
  
  sorting=(bird,i)=>{
    if(bird==="birb"){
      return(
        <li key={i}>
            {bird}
          </li>
      )
      }
      return(
        <li key={i}>
            Its not a birb. :C
          </li>
      )
    
    
  }
  handleSubmission=(e)=>{
    e.preventDefault();
    const bird=this.bird.value;
    this.props.birdStore.addBird(bird);
    this.bird.value='';      
  }

  render() {
    const {birdStore} = this.props;
    
    return (
      
      <div className="App">
      <h2>You have {birdStore.birdCount} birds!</h2>

      <form onSubmit={e=>this.handleSubmission(e)}>
        <input class="form-control" type="text" placeholder="Input the birb name" ref={input=>this.bird=input} />
        <button className="btn btn-primary" >Add bird</button>
      </form>
      <ul>
        {/* {birdStore.birds.map((bird,i) => this.sorting(bird,i))}  */}    {/*This is for the birb option */}
      {birdStore.birds.map((bird,i) =>(
        <li key={i}>
          {bird}
        </li>
      ))}
      
      </ul>
      </div>
    );
  }
}

export default App;
