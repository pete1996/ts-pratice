import React, { useEffect, useState } from "react";
// import {Button} from 'antd';
// class TestLifeCycle extends Component {

//     public state = {
//         name2: 'kangkang',
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             console.log(this.state.name2);
//         },10000)
//     }

//     updateName = ()=> {
//         this.setState({
//             name2: 'kangkang2'
//         })
//     }
//     render(){
//         const name = this.state.name2;
//         return <div>
//             <span>{name}</span>
//             <Button onClick={()=> this.updateName()} type="primary">更新名称</Button>
//         </div>
//     }
// }

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("AA");
    //   const id = setInterval(() => {
    //     //console.log('setInteval 执行了');
    //     setCount(c => c + 1);
    //   }, 1000);
    return () => {
      console.log("清除呀");
      // clearInterval(id);
    };
  }, []);

  return <h1>{count}</h1>;
}
export default Counter;
