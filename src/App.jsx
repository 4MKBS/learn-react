import React,{useEffect,useCallback, useMemo} from 'react';
import Button from './components/Button';
import Title from './components/Title';
import ShowCount from './components/ShowCount';

export default function App(){
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);

    const incrementCount1 = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    },[]);
    const incrementCount5 = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    },[]);
    const eveod = useMemo(()=> {
        let i=0;
        //while(i<1000000000)i+=1;//some heavy task
        return count1%2===0;
    },[count1]);
    
    return (
        <div className="app">
           <Title />
           <ShowCount count={count1} title={'Count 1'} />
           <span>{eveod?'Even':'odd'}</span>
           <Button handleClick={incrementCount1}> Increment 1</Button>
           <hr />
           <ShowCount count={count2} title={'Count 5'}/>
           <Button handleClick={incrementCount5}> Increment 5</Button>
        </div>
    )
}