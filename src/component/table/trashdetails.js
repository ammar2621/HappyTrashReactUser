import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableTrash = props => {
  const data = {
    columns: [
      {
        label: "Jenis Sampah",
        field: "id",
        sort: "asc"
      },
      {
        label: "Jumlah Berat",
        field: "heading0",
        sort: "asc"
      },
      {
        label: "Dapat Point",
        field: "heading1",
        sort: "asc"
      }
    ],
    rows: [
      {
        id: "Plastik PP",
        heading0: "5 Kg",
        point: "5 Points"
      },
      {
        id: "Kertas HVS",
        heading0: "6 Kg",
        point: "6 Points"
      }
    ]
  };

  return (
    <MDBTable responsive>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default TableTrash;
