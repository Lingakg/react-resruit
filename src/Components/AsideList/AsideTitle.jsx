import React,{Component} from 'react'
import './aside-component.css'

class AsideTitle extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="aside-title">
                <h3>招聘岗位</h3>
                <span>清空</span>
            </div>
        )
    }
}

export default AsideTitle;