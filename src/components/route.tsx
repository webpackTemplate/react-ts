import * as React from 'react'
export  interface MrouteProps { hello: string;}
export default class Hroute extends React.Component<MrouteProps>{
    state = {uhello:"状态"}
    cwvent(){
        this.setState(()=>{
            return {
                uhello:"我修改状态"
            }
        })
    }
    render(){
        let cwvent = this.cwvent.bind(this);
        return <div onClick={cwvent}>{this.props.hello}:{this.state.uhello}</div>
    }
}