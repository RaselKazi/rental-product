import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Data } from "../Data/ProductData";
import ConfirmModal from "../utils/ConfirmModal";

export default function RetrunModal({ show, setShow }) {
  const [selectData, setSelectData] = useState("");
  const [bookData, setBookData] = useState("");
  const [confirmModalShow, setConfirmModalShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleSelect = (e) => {
    setShow(false);
    setConfirmModalShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            size="lg"
            value={selectData}
            onChange={(e) => setSelectData(e.target.value)}
          >
            <option>Select Product</option>
            {Data.map((product) => (
              <option key={product.code} value={product.code}>
                {product.name}
              </option>
            ))}
          </Form.Select>
          <Row className="py-4  ">
            <Col sm={6}></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            NO
          </Button>
          <Button variant="primary" onClick={handleSelect}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <ConfirmModal
        title="Confirm Retrun a Product"
        show={confirmModalShow}
        setShow={setConfirmModalShow}
        data={bookData}
      />
    </>
  );
}
