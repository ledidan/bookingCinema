import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import danhSachGhe from "../DataCinema/danhSachGhe.json";
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";

export default class BookingCinemaTicket extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(img/bgmovie.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4 text-uppercase mt-2">
                  Booking Movie Tickets
                </div>

                <div className="text-light" style={{ fontSize: "30px" }}>
                  Screen
                </div>
                <div
                  className="mt-0"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                <div style={{ marginLeft: "100px" }}>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4 mt-2">
                <div
                  className="text-light text-uppercase"
                  style={{ fontSize: "35px" }}
                >
                  Seat Availability
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
