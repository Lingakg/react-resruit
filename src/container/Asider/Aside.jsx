import React, { Component } from 'react';
import AsideList from '../../Components/AsideList/AsideList'
import './aside.css'

class Aside extends React.Component {
    constructor(props){
        super(props)
        //实际项目中ajax获取
        this.state = {
            resruit:[
                {
                    "itemName":"工程研发部门",
                    "total":120,
                    "subItem":[
                        {
                            "itemName":"Mac开发工程师",
                            "total":9
                        },
                        {
                            "itemName":"iOS App 测试工程师",
                            "total":17
                        },
                        {
                            "itemName":"Android 远程控制工程师",
                            "total":61
                        },
                        {
                            "itemName":"Web 前端工程师",
                            "total":31
                        },
                        {
                            "itemName":"Android 多媒体软件开发工程师",
                            "total":2
                        }
                    ]
                },
                {
                    "itemName":"产品设计部门",
                    "total":136,
                    "subItem":[
                        {
                            "itemName":"网页设计师",
                            "total":47
                        },
                        {
                            "itemName":"ID/工业设计师",
                            "total":39
                        },
                        {
                            "itemName":"视觉设计师/GUI界面设计师",
                            "total":42
                        },
                        {
                            "itemName":"平面设计师",
                            "total":8
                        }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <section>
               <div className="aside-container">
                   {/*整个list多选栏*/}
                   <AsideList resruit={this.state.resruit}></AsideList>
               </div>
                /*根据ui图加上的一个待使用区域*/
                <div className="aside-container"></div>
            </section>
        );
    }
}

export default Aside;