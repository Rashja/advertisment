import React from "react";
import Advertisment from "./Advertisment";

export default function TableWrapper({ memorizedAdvertisment }) {
  return (
    <>
      {memorizedAdvertisment.length > 0 ? (
        <div className="limiter">
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table100 ver1 m-b-110">
                <div className="table100-head">
                  <table>
                    <thead>
                      <tr className="row100 head">
                        <th className="cell100 column5">آدرس</th>
                        <th className="cell100 column2">طبقه</th>
                        <th className="cell100 column3">موقعیت ملکی</th>
                        <th className="cell100 column4">موقعیت واحد</th>
                        <th className="cell100 column1">نوع ملک</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                {memorizedAdvertisment.map((adv, index) => (
                  <div
                    key={index}
                    className="table100-body js-pscroll ps ps--active-y"
                  >
                    <table>
                      <tbody>
                        <Advertisment info={adv} />
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
