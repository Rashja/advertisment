import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Loading from "../components/Loading";

const BodyCover = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      const { push } = this.props.history;
      if (localStorage.getItem("token") === null) {
        push("/login");
      } else {
        push("/");
      }
    }
    /*--------------------------------------------------------------------- */
    render() {
      const { loading } = this.props;
      return (
        <>
          {loading ? <Loading /> : ""}
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

const mapState = ({ base: { loading } }) => ({
  loading,
});

const composeWrapper = compose(connect(mapState), BodyCover);

export default composeWrapper;
