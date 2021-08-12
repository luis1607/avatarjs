import React, { Component } from 'react';
import Counter from './counter';
import PropTypes from 'prop-types'

class Counters extends Component {

    render() { 
        console.log('Counters - Render')

        const { onReset,counters,onDelete,onIncrement } = this.props

        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m2" >Reset</button>
                {counters.map( counter=>(
                    <Counter  
                    key={counter.id} 
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter}
                    >
                      
                      
                    <h2>Titulo #{counter.id}</h2>
                    </Counter>
                    
                ))}
            </div>
          );
    }
}

Counters.propTypes = {
    onReset : PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired,
    onIncrement : PropTypes.func.isRequired,
    counters: PropTypes.array.isRequired
}
 
export default Counters;