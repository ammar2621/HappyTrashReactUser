import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableOrder = props => {
  const data = {
    rows: [
      {
        key: "Lokasi",
        value: props.summary.adress
      },
      {
        key: "Waktu",
        value: props.summary.time
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
