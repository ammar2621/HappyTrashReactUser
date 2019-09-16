import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableTrash = props => {
  const details = props.details ? props.details : [{ trash_detail: { trash_name: null } }];
  const data = {
    columns: [
      {
        label: "Jenis Sampah",
        field: "id"
        // sort: "asc"
      },
      {
        label: "Jumlah Berat",
        field: "qty"
        // sort: "asc"
      },
      {
        label: "Dapat Point",
        field: "point"
        // sort: "asc"
      }
    ],
    rows: details.map((elm, key) => {
      const name = elm.trash_detail.trash_name ? elm.trash_detail.trash_name : 0;
      const point = elm.point ? elm.point : 0;
      const qty = elm.qty ? elm.qty : 0;
      return (
        {
          id: name,
          qty,
          point
        }
      )
    })
  };

  return (
    <MDBTable responsive>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default TableTrash;
