import React,{Component} from 'react'
import './aside-component.css'

class SubList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            itemList:props.subItem,
            arrVal:[]
        }
        this.state.itemList.map((item,index)=> {
            this.state.arrVal.push(false)
        })
    }
    render(){
        return(
            <ul className="sub-list">
                {
                    this.state.itemList.map((item,index)=> {
                        return (
                            <li key={index}>
                                <div>
                                    <input type="checkbox" onClick={this.choice.bind(this,index)} style={{background:this.state.arrVal[index]?"blue":"rgba(0,0,0,0)"}}/>
                                    <p>{item.itemName}</p>
                                    <span>{item.total}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    choice(val){
        let newStatus = this.state.arrVal;
        newStatus[val] = !newStatus[val];
        let flag = false;
        this.setState({
            arrVal:newStatus
        })
        this.props.valCheck(this.state.arrVal,this.props.fatherNo)
    }
}

export default SubList;