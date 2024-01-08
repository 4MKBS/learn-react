export default function Boiling({celcius=0,scl}){
    console.log(celcius);
    if(celcius >= 100 && scl==='c'){
        return <p>The water would boil.</p>
    }else if(celcius >= 212 && scl==='f'){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}