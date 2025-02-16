import React, {Component} from "react";

export default class Feed extends Component{

    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.userName}</h3>
<a>curtidas {this.props.curtidas > 1 ? "curtidas" + this.props.curtidas: 'curtidas' + this.props.curtidas }</a>
            </div>
        );
    }

}