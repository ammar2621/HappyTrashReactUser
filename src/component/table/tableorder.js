import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableOrder = props => {
  const data = {
    rows: [
      {
        id: "Lokasi",
        heading0: "Jalan Raya Tidar No 23 A"
      },
      {
        id: "Tanggal",
        heading0: "26 September 2019"
      },
      {
        id: "Waktu",
        heading0: "14.00"
      },
      {
        id: "Jumlah Sampah",
        heading0: "11 Kg"
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
