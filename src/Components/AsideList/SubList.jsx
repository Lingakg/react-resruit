import React,{Component} from 'react'
import './aside-component.css'

class SubList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            itemList:props.subItem
        }
    }
    render(){
        return(
            <ul className="sub-list">
                {
                    this.state.itemList.map((item,index)=> {
                        return (
                            <li key={index}>
                                <div>
                                    <input type="checkbox"/>
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
}

export default SubList;