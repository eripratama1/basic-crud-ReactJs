import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const TableComponent = ({ products, editData, hapusData }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Produk</th>
                        <th>Harga</th>
                        <th>Opsi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.nama}</td>
                                <td>{product.harga}</td>
                                <td>
                                    <button className="btn btn-warning mr-2" onClick={() => editData(product.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => hapusData(product.id)}>Hapus</button>                                    
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            <hr />
        </div>
    )
}

export default TableComponent
