import React from "react";
import { Alert, Button, Form, FormControl, Table } from "react-bootstrap";
import BookModal from "./BookModal";
export default function ProductTable({ data }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th className="d-none	d-md-block">Code</th>
            <th>ability</th>
            <th>repair</th>
            <th>durability</th>
            <th>mileage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, i) => (
            <tr key={product.code}>
              <td>{i}</td>
              <td>{product.name}</td>
              <td className="d-none	d-md-block">{product.code}</td>
              <td className="">
                {product.availability ? (
                  <Alert
                    className="d-flex justify-content-center  p-0 w-75 m-0"
                    variant="success"
                  >
                    Available
                  </Alert>
                ) : (
                  <Alert
                    className="d-flex justify-content-center  p-0 w-75 m-0"
                    variant="danger"
                  >
                    Unavailable
                  </Alert>
                )}
              </td>

              <td className="">
                {product.needing_repair ? (
                  <Alert
                    className="d-flex justify-content-center  p-0 w-75 m-0"
                    variant="success"
                  >
                    Available
                  </Alert>
                ) : (
                  <Alert
                    className="d-flex justify-content-center  p-0 w-75 m-0"
                    variant="danger"
                  >
                    Unavailable
                  </Alert>
                )}
              </td>
              <td>{product.durability}</td>
              <td>{product.mileage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
