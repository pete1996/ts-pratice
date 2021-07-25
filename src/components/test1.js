import React,{useState,useEffect} from 'react'
function Test1(){
    let [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=> {
            if(count=== 0){
                setCount(100)
            }
            
        },3000)
        return function(){
            console.log('updated an once' +  new Date().getTime())
        }
    },[count])
    console.log('Test1 render' + new Date().getTime());
    return (<div>
        Test1 {count}
    </div>);
}

export default Test1;