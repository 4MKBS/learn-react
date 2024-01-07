import Clock from './Clock.jsx'
function ClockList({quantities=[]}){
    return (
        <div>
            {quantities.map(()=> (
                <Clock key={Math.random()} />
            ) )}
        </div>
    );
} 
export default ClockList;