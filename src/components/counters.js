

function Counters(props){
    return(
        <div>
            <p>
                Count: {props.count}
            </p>
            <button onClick={props.increamentCounter}> Increament</button>
            <button onClick={props.decreamentCounter}>Decreament</button>
        </div>
    )
}

export default Counters;