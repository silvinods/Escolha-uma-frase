import React, {Component} from "react";
import Feed from "../feed/idex";

export default class Membro extends Component{
    constructor(props){
super(props);
this.state = {
  feed: [
    {id: 1, userName: 'silvino', curtidas: 10, comentarios: 2},
    {id: 2, userName: 'Marcus', curtidas:120, comentarios: 24},
    {id: 3, userName: 'Leiticia', curtidas: 30, comentarios:12},
    {id: 3, userName: 'Ricardo', curtidas: 1, comentarios:0},
  ]
};
    }

    render(){
      return(
     <div>
  {this.state.feed.map((item)=>{
return(
 <Feed id={item.id} userName={item.userName} curtidas={item.curtidas} comentarios={item.comentarios}/>
)
  })}
    </div>
      )
    }
  }
