import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const FormComponent = ({ nama, harga, handleSubmit, handleChange,id }) => {
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <h3>{id ? "Edit Data" : "Tambah Data"}</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nama Produk</Form.Label>
                            <Form.Control type="text" name="nama"
                                onChange={(event) => handleChange(event)}
                                value={nama} />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="number" name="harga"
                                onChange={(event) => handleChange(event)}
                                value={harga} />
                        </Form.Group>
                        <Form.Group className="mt-3 float-right">
                            <Button type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default FormComponent
