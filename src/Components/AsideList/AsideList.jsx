import React,{Component} from 'react'
import SubList from './SubList'

/**
* 侧边栏列表
* */
class AsideList extends React.Component{
    constructor(props){
        super(props)
        /*
        * list:展示数据，正常项目中ajax
        * allFlag:所有选选项的状态
        * */
        this.state={
            list:props.resruit,
            allFlag:[],
            toggles:[]
        }
        /*初始状态，全部为false*/
        this.state.list.map((item,index)=> {
            this.state.allFlag.push(false)
            this.state.toggles.push(true)
        })
    }
    render(){
        return(
            <div>
                <div className="aside-title">
                    {/*标题和清除*/}
                    <h3>招聘岗位</h3>
                    <span onClick={this.clearAll.bind(this)}>清空</span>
                </div>
                <ul>
                    {/*主列表*/}
                    {this.state.list.map((item,index)=>{
                        return(
                            <li key={index} className="main-class-item">
                                {/*一级大分类*/}
                                <h4>
                                    <input type="checkbox" onClick={this.mainChoice.bind(this,index)} />
                                    <p>{item.itemName}</p>
                                    <em onClick={this.toggleShow.bind(this,index)} className={this.state.toggles[index]?"btn-open":"btn-close"}></em>
                                    <span>{item.total}</span>
                                </h4>
                                {/*二级子列表组件*/}
                                <SubList subItem={item.subItem} valCheck={this.valCheck.bind(this)} fatherNo={index} ref={"all"+index}></SubList>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    /*子列表是否全部选中，如果全部选中则一级自动选中*/
    valCheck(arr,FatherNo){
        let flag = true
        arr.map((item,index)=>{
            if(!item){
                flag=false
                this.getEle(FatherNo).style.background = "rgba(0,0,0,0)";
                let newFalg = this.state.allFlag;
                newFalg[FatherNo]=false
                this.setState=({
                    allFlag:newFalg
                })
            }
        })
        if(flag){
            let newFalg = this.state.allFlag;
            newFalg[FatherNo]=true
            this.setState=({
                allFlag:newFalg
            })
            this.getEle(FatherNo).style.background = "blue";
        }
    }
    /*点击全选选中所有子项*/
    mainChoice(val){
        let newFalg = this.state.allFlag;
        newFalg[val]=!newFalg[val]
        this.setState=({
            allFlag:newFalg
        })

        let currentEl = this.getEle(val)
        if(newFalg[val]) {
            currentEl.style.background = "blue";
        }else{
            currentEl.style.background = "rgba(0,0,0,0)";
        }
        this.refs['all'+val].allVal(newFalg[val])
    }
    /*清空所有选项*/
    clearAll(){
        let sum=0;
        for(let item in this.refs){
            this.getEle(sum).style.background = "rgba(0,0,0,0)";
            this.refs[item].allVal(false)
            sum++;
        }
    }
    /*点击展开和收起切换*/
    toggleShow(index){
        var upToggle = this.state.toggles;
        upToggle[index] = !upToggle[index]
        let tgleEl = document.getElementsByClassName("main-class-item")[index].getElementsByTagName("em")[0];
        if(upToggle[index]){
            tgleEl.className = "btn-open"
        }else{
            tgleEl.className = "btn-close"
        }
        this.refs['all'+index].toggle(upToggle[index])
    }
    /*获取点击的父项*/
    getEle(val){
        return document.getElementsByClassName("main-class-item")[val]
            .getElementsByTagName("h4")[0]
            .getElementsByTagName("input")[0];
    }
}

export default AsideList;