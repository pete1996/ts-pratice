import React,{useState,useCallback,useMemo,useEffect} from 'react'


function Child({title,onChange}){
    console.log('Child render');
    return (
        <div onClick={()=> onChange(100)}>
            I am a child {title.name}
        </div>
    )
}

let Child1 = React.memo(Child)
function App2(){
    const [count,setCount] = useState(0);
    const [subData,setSubData] = useState("haha");

    useEffect(()=> {
        console.log(count + "n");

    },[count])

    return (<div>
        <h1>I am parent click {count} times</h1>

        <Child1 title={useMemo(()=> ({name:subData,age:1}),[subData])} onChange={useCallback(()=> setCount(100),[])}/>
        <button onClick={()=>setCount(count+1)}></button>
        <h2>222</h2>
        <button onClick={()=>setSubData('sfsdf')}></button>
        </div>)
}
export default App2