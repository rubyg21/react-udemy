import { Component } from "react";

const styles = {
    title: {
        marginBoton: '30px'
    }
}

class Title extends Component{
    render(){
        return(
            <div>
                <h1 style={styles.title}> Tienda </h1>
            </div>
        )
    }
}


export default Title