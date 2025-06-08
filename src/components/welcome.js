

function Welcome(props){
    return(
        <>
            <h1>
                Welcome to my website!
                
                <br />
                
            </h1>
            <h3>Hello, {props.name}</h3>
            <p> {props.message}</p>
        </>
    )
}

export default Welcome;