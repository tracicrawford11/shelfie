import React, {Component} from 'react'
import axios from 'axios'


class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            image: '',
            products: [],
        }
    }
    componentDidMount() {
        axios.get("/api/products").then(response => {
            this.setState ({products: response.data})
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const {name, price, image} = this.state
        let body = {
            name: name,
            price: price,
            image: image
        }
        axios.post('/api/products', body)
        .then(response => {
        this.setState({products: response.data})
        })
    }

    render () {
        let {products} = this.state
        return (
            <div>
                <h1>Form Component</h1>
                <form>
                <input placeholder="Name" onChange={e => this.setState({name: e.target.value})} />
                    <input placeholder="Price" onChange={e => this.setState({price: e.target.value})} />
                    <input placeholder="Image" onChange={e => this.setState({image: e.target.value})} />
                    <button onClick={this.handleClick}>Add Product</button>
                    <button onClick ={this.handleClick}>Cancel</button>
                </form>
            {products.map (val => {
                return (
                    <div className= 'inputs'>
                        <h1>{val.name}</h1>
                        <h1>{val.price}</h1>
                        <h1>{val.image}</h1>
                    </div>
                )
            })}
        </div>
        )
    }   
}
export default Form