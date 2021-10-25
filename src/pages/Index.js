import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import FormComponent from '../components/FormComponent'
import NavbarComponent from '../components/NavbarComponent'
import TableComponent from '../components/TableComponent'

export default class Crud extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            nama: "",
            harga: 0,
            id: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {

            this.setState({
                products: [
                    ...this.state.products,
                    {
                        id: this.state.products.length + 1,
                        nama: this.state.nama,
                        harga: this.state.harga
                    }
                ]
            })
            console.log("Data :", this.state);
        } else {
            const productSelectOther = this.state.products
                .filter((product) => product.id !== this.state.id)
                .map((filterProduct) => {
                    return filterProduct
                })
            this.setState({
                products: [
                    ...productSelectOther,
                    {
                        id: this.state.products.length + 1,
                        nama: this.state.nama,
                        harga: this.state.harga
                    }
                ]
            })

        }

        this.setState({
            nama: '',
            harga: 0,
            id: ''
        })

    }

    editData = (id) => {
        const productSelect = this.state.products
            .filter((product) => product.id === id)
            .map((filterProduct) => {
                return filterProduct
            })

        this.setState({
            nama: productSelect[0].nama,
            harga: productSelect[0].harga,
            id: productSelect[0].id
        })
    }

    hapusData = (id) => {
        const productDestroy = this.state.products
        .filter((product) => product.id !== id)
        .map((filterProduct) => {
            return filterProduct
        })

        this.setState({
            products : productDestroy
        })
    }

    render() {

        return (
            <div>
                <NavbarComponent />
                <div className="container">
                    <Card className="mt-4">
                        <CardHeader>List Data</CardHeader>
                        <Card.Body>
                            <TableComponent 
                            products={this.state.products} 
                            hapusData={this.hapusData}
                            editData={this.editData} />
                            <FormComponent {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
