import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseCounter}  from "../redux/actions/counterActions"

function Increase(props) {
    return (
        <div>
            <button onClick={e=>{
                props.dispatch(increaseCounter())
            }}>Arttır</button>
            
        </div>
    )
}

function mapDispatchToProps(dispatch){
    actions:bindActionCreators(increaseCounter, dispatch)

}


export default connect(mapDispatchToProps())(Increase)
