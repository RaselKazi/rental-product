import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Data } from "../Data/ProductData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ConfirmModal from "../utils/ConfirmModal";
export default function BookModal({ show, setShow, date }) {
  const [selectData, setSelectData] = useState("");
  const [bookData, setBookData] = useState("");
  const [confirmModalShow, setConfirmModalShow] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClose = () => setShow(false);

  const handleSelect = (e) => {
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log(Difference_In_Days);
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
            <Col sm={6}>
              <div className="d-flex my-2">
                <div className="px-2">from</div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </Col>

            <Col sm={6}>
              <div className="d-flex my-2">
                <div className="px-3 ">to</div>

                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </Col>
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
        title="Confirm Book a Product"
        show={confirmModalShow}
        setShow={setConfirmModalShow}
        data={bookData}
      />
    </>
  );
}
