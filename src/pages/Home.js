import React, { useEffect, useMemo } from "react";
import reduxGenerator from "../customHooks/reduxGenerator";
import { getAdvertisment } from "../actions/home";
import BodyCover from "../hoc/BodyCover";
import TableWrapper from "../components/TableWrapper";
import out from "../assets/images/power.svg";

const Home = ({ history }) => {
  /*------------------------ useRedux -------------------- */
  const useRedux = reduxGenerator();
  /*----------------------- side effects ----------------- */
  useEffect(() => {
    useRedux.dispatch(getAdvertisment());
  }, []);
  /*------------------------- memorize ------------------- */
  const memorizedAdvertisment = useMemo(() => useRedux.advertismentList, [
    useRedux.advertismentList,
  ]);
  /*------------------------- sign out ------------------- */
  const handleSignOut = () => {
    localStorage.clear();
    history.push("/login");
  };
  /*----------------------- render header ---------------- */
  const renderHeader = () => {
    return (
      <div className="header">
        <div onClick={handleSignOut} className="btn-wrapper">
          <img src={out} />
        </div>
        <h1>لیست آگهی ها</h1>
      </div>
    );
  };
  /*------------------------------------------------------ */
  return (
    <>
      {renderHeader()}
      <TableWrapper memorizedAdvertisment={memorizedAdvertisment} />
    </>
  );
};

export default BodyCover(Home);
