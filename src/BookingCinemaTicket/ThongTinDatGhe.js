import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../redux/types/BaiTapDatVeType";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "25px" }}>
            Booked Seat
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "25px" }}>
            Seat is booking..
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>
          <span className="text-light ml-2" style={{ fontSize: "25px" }}>
            Available Seat
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "20px" }}>
                <th>Seat Number</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index} style={{ fontSize: "20px" }}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        className="text-danger"
                        onClick={() => {
                          this.props.dispatch({
                            type: HUY_GHE,
                            soGhe: gheDangDat.soGhe,
                          });
                        }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td>Total</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
