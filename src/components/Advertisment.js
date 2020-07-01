import React from "react";

export default function Advertisment({ info }) {
  return (
    <tr className="row100 body">
      <td className="cell100 column5">{info.street.zone.name}</td>
      <td className="cell100 column2">{info.floor}</td>
      <td className="cell100 column4">{info.buildingDirectionType.name}</td>
      <td className="cell100 column3">{info.buildingUnitDirectionType.name}</td>
      <td className="cell100 column1">{info.documentType.name}</td>
    </tr>
  );
}
