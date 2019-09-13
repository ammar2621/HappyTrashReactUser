import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableOrder = props => {
  const data = {
    rows: [
      {
        key: "Lokasi",
        value: "Jalan Raya Tidar No 23 A"
      },
      {
        key: "Tanggal",
        value: "26 September 2019"
      },
      {
        key: "Waktu",
        value: "14.00"
      },
      {
        key: "Jumlah Sampah",
        value: "11 Kg"
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
