import React from 'react';
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked: false,
            counter: 1,
            name: 'Kangkang'
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=> {
            this.tick();

        },1000)
    }

    tick(){
        //const old = this.state.counter;
        this.setState({
            counter: this.state.counter+ 1,
        })
    }
    componentWillUnmount(){
        console.log('1');
        console.log('2');
        console.log('3');
        console.log('4');
        console.log('5');
        clearInterval(this.timer)
    }
    render(){
        if(this.state.liked){
            return 'You like this';
        }
        return <button  onClick={()=> this.setState({liked: true})}>
            {this.state.counter + this.state.name}  
        </button>;
    }
};