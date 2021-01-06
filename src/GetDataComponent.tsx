import React from "react";

export default class GetDataComponent extends React.Component{

    state = {
        loading: true,
        data: null
    }

    // this method is part of Component Class is called automatically! 
    async componentDidMount(){
        const url = 'http://localhost'
        let response = await fetch(url);
        let responseJson = await response.json();
        this.setState( { loading:false, data: responseJson.data })
    }

    render(){
        return <div>
            {this.state.loading || !this.state.data ? (
                <div>loading...</div>
            ):(
                <div>{this.state.data}</div>
            )}
            
        </div>
    }
}