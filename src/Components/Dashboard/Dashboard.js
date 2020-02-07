import React, {Component} from 'react'
import Product from '../../Components/Product/Product'


class Dashboard extends Component {
    constructor () {
        super()
    }

render () {
    return (
        <div>
            <h1>Dashboard Component</h1>

            <Product />
        </div>
        )
    }   
}
export default Dashboard