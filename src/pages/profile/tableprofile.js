import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableProfile = props => {
  const data = {
    rows: [
      {
        key: "Nama",
        value: "Ammar Al Faruqi"
      },
      {
        key: "Email",
        value: "ammar@alterra.id"
      },
      {
        key: "Nomor Handphone",
        value: "082278787878"
      }
    ]
  };

  return (
    <MDBTable responsive>
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default TableProfile;
