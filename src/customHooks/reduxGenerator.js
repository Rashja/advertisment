import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { advertismentData } from "../reducer/selectors";

export default function reduxGenerator() {
  const advertismentList = useSelector(advertismentData);
  const dispatch = useDispatch();
  return {
    dispatch,
    advertismentList,
  };
}
