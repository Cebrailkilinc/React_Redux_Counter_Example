import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'

function Decrease(props) {
    return (
        <div>
            <button onClick={
                e=>{props.dispatch(decreaseCounter())}
            } >Azalt</button>
            
        </div>
    )
}


function mapDispatchToProps (dispatch){
    actions: bindActionCreators(decreaseCounter,dispatch)

}

export default connect(mapDispatchToProps())(Decrease)

