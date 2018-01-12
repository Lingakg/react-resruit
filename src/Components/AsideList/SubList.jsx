import React,{Component} from 'react'
import './aside-component.css'

class SubList extends React.Component{
    constructor(props){
        super(props)
        /**
         * itemList：子项的列表
         * arrVal: 选中状态
         * */
        this.state = {
            itemList:props.subItem,
            arrVal:[],
            isOpen:true
        }
        this.state.itemList.map((item,index)=> {
            this.state.arrVal.push(false)
        })
        this.allVal.bind(this)
    }
    render(){
        return(
            <ul className={this.state.isOpen?"sub-list open":"sub-list close"}>
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
    /*点击选择*/
    choice(val){
        let newStatus = this.state.arrVal;
        newStatus[val] = !newStatus[val];
        let flag = false;
        this.setState({
            arrVal:newStatus
        })
        this.props.valCheck(this.state.arrVal,this.props.fatherNo)
    }
    /*执行所有的选中*/
    allVal(isAll){
        let updateStatus = this.state.arrVal
        this.state.itemList.map((item,index)=> {
            if(isAll){
                updateStatus[index]=true
            }else{
                updateStatus[index]=false
            }
        })
        this.setState({
            arrVal:updateStatus
        })
    }
    toggle(flag){
        this.setState({
            isOpen:flag
        })
    }
}

export default SubList;