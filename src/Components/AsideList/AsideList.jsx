import React,{Component} from 'react'
import SubList from './SubList'

class AsideList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:props.resruit,
            allFlag:[]
        }
        this.state.list.map((item,index)=> {
            this.state.allFlag.push(false)
        })
    }
    render(){
        return(
            <ul>
                {this.state.list.map((item,index)=>{
                    return(
                        <li key={index} className="main-class-item">
                            <h4>
                                <input type="checkbox" style={{background:this.state.allFlag[index]?"blue":"rgba(0,0,0,0)"}} onClick={this.mainChoice.bind(this,index)}/>
                                <p>{item.itemName}-{this.state.allFlag[index]?"blue":"rgba(0,0,0,0)"}</p>
                                <span>{item.total}</span>
                            </h4>
                            <SubList subItem={item.subItem} valCheck={this.valCheck.bind(this)} fatherNo={index}></SubList>
                        </li>
                    )
                })}
            </ul>
        )
    }
    valCheck(arr,FatherNo){
        let flag = true
        arr.map((item,index)=>{
            if(!item){
                flag=false
            }
        })
        if(flag){
            let newFalg = this.state.allFlag;
            newFalg[FatherNo]=true
            this.setState=({
                allFlag:newFalg
            })
            console.log(this.state.allFlag)
        }
    }
    mainChoice(val){
        let newFalg = this.state.allFlag;
        newFalg[val]=!newFalg[val]
        this.setState=({
            allFlag:newFalg
        })
        console.log(this.state.allFlag)
    }
}

export default AsideList;