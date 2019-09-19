import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableOrder = props => {
  const dumm = props.summary.adress
    ? JSON.parse(props.summary.adress).adress
    : "dummy";
  const data = {
    rows: [
      {
        key: "Lokasi",
        value: dumm
      },
      {
        key: "Waktu",
        value: props.summary.time.slice(0, 22)
      },
      {
        key: "Jumlah Sampah",
        value: props.summary.total_qty + " Kg"
      }
    ]
  };

  return (
    <MDBTable responsive>
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default TableOrder;
