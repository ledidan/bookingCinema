import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BaiTapDatVeActions";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssBooked = "";
      let disabled = false;

      if (ghe.daDat) {
        cssBooked = "gheDuocChon";
        disabled = true;
      }

      // Checking seat status...
      let cssBooking = "";
      let indexBooking = this.props.danhSachGheDangDat.findIndex(
        (indexBooking) => indexBooking.soGhe === ghe.soGhe
      );
      if (indexBooking !== -1) {
        cssBooking = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          key={index}
          className={`ghe ${cssBooked} ${cssBooking}`}
          disabled={disabled}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-3 mt-3" style={{ fontSize: "25px" }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
