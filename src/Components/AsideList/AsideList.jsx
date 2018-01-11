import React,{Component} from 'react'
import SubList from './SubList'

class AsideList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:props.resruit
        }
    }
    render(){
        return(
            <ul>
                {this.state.list.map((item,index)=>{
                    return(
                        <li key={index} className="main-class-item">
                            <h4>
                                <input type="checkbox"/>
                                <p>{item.itemName}</p>
                                <span>{item.total}</span>
                            </h4>
                            <SubList subItem={item.subItem}></SubList>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default AsideList;