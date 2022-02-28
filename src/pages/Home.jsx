import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import Header from "../component/Header";
import { Data } from "../Data/ProductData";
import ProductTable from "../component/ProductTable";
import BookModal from "../component/BookModal";
import RetrunModal from "../component/RetrunModal";

export default function Home() {
  const [show, setShow] = useState(false);
  const [retrunModalShow, setRetrunModalShow] = useState(false);
  const [Search, setSearch] = useState("");
  const [productData, setProductData] = useState(Data);

  const handleShow = () => setShow(true);
  const handleRetrunModal = () => setRetrunModalShow(true);

  useEffect(() => {
    if (Search !== "") {
      const products = Data.filter((product) => {
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(Search.toLowerCase());
      });
      setProductData(products);
    } else {
      setProductData(Data);
    }
  }, [Search]);

  return (
    <div className="bg-light ">
      <Header />
      <Container fluid="sm">
        <div className="py-5 ">
          <Row className="justify-content-md-center ">
            <Col
              md={9}
              className=" border border-secondary shadow p-3 mb-5 bg-body rounded"
            >
              <Row className="py-4">
                <Col md={6}></Col>
                <Col md={6}>
                  <div className="px-4">
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      {/* <Button onClick={handleSearch} variant="outline-success">
                        Search
                      </Button> */}
                    </Form>
                  </div>
                </Col>
              </Row>
              <ProductTable data={Search.length < 1 ? Data : productData} />
              <Row>
                <Col sm={8}></Col>
                <Col sm={4}>
                  <div className="d-flex justify-content-end">
                    <Button variant="dark" onClick={handleShow}>
                      Book
                    </Button>
                    <Button
                      className="mx-2"
                      variant="primary"
                      onClick={handleRetrunModal}
                    >
                      Return
                    </Button>
                    <BookModal
                      show={show}
                      handleShow={handleShow}
                      setShow={setShow}
                      data={Data}
                    />
                    <RetrunModal
                      show={retrunModalShow}
                      setShow={setRetrunModalShow}
                      data={Data}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
