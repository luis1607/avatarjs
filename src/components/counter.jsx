import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        console.log("prevProps",prevState);
        console.log("prevState",prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount(){
        console.log('Counter - unmount')
    }

    
    
    /* renderTags() {
        if (this.state.tags.length === 0) return <p>No existen tags</p>;
        return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    } */

    

    render() {

        console.log('counter - Render')

        return (
            <div>
                
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>
                {/* {this.renderTags()} */}

            </div>
        );
    }

    getBadgeClasses() {
        let clases = "badge m-2 badge-";
        clases += this.props.counter.value === 0 ? "warning" : "primary";
        return clases;
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value;
    }
}

Counter.propTypes = {
    onIncrement : PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
}

export default Counter;