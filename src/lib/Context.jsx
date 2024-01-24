class Context{
    constructor(value = null){
        this.value= value;
    }

    //provider 
    Provider=({children,value})=>{
        this.value=value;
        return children;
    }

    //consumer
    Comsumer = ({children})=> children(this.value);
}

function createContext(value = null){
    const context = new Context(value);
    return {
        Provider: context.Provider,
        Comsumer: context.Comsumer,
    }

}
export default createContext;