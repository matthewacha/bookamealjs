import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userEditStatus, getOrders } from "../../actions/adminActions";

export class UserOrderView extends Component {
  onClick = e => {
    e.preventDefault();
    var timeSpan = Date.now() - Date.parse(this.props.order.when);
    let status = { status: "cancelled" };
    if (timeSpan < 120000) {
      this.props.userEditStatus(status, this.props.order.orderId);
    }
    this.props.getOrders();
  };
  handleButtonToggle = e => {
    e.preventDefault();
    let status = { status: "delivered" };
    this.props.userEditStatus(status, this.props.order.orderId);
    this.props.getOrders();
  };
  viewStatus = order => {
    var timeSpan = Date.now() - Date.parse(order.when);
    var element;
    if (timeSpan > 120000 && order.status === "processing") {
      element = (
        <div id="delete-button" style={{ padding: "0px" }}>
          <div
            className="add-btn"
            style={{
              float: "left",
              borderRadius: "2px",
              width: "75.99px",
              padding: "0px 5px 0px 5px"
            }}
          >
            {order.status}
          </div>
        </div>
      );
    } else if (order.status === "processing") {
      element = (
        <div id="delete-button" style={{ padding: "0px" }}>
          <div
            className="add-btn"
            style={{
              float: "left",
              borderRadius: "2px",
              width: "75.99px",
              padding: "0px 5px 0px 5px"
            }}
          >
            {order.status}
          </div>
          <div style={{ width: "91px" }}>
            <a href="" onClick={this.onClick}>
              <span className="glyphicon glyphicon-remove" />
            </a>
          </div>
        </div>
      );
    } else if (order.status === "delivered") {
      element = (
        <div id="delete-button" style={{ padding: "0px" }}>
          <div
            className="success-btn"
            style={{
              float: "left",
              borderRadius: "2px",
              width: "75.99px",
              padding: "0px 5px 0px 5px"
            }}
          >
            {order.status}
          </div>
        </div>
      );
    } else if (order.status === "cancelled") {
      element = (
        <div id="delete-button" style={{ padding: "0px" }}>
          <div
            className="del-btn"
            style={{
              float: "left",
              borderRadius: "2px",
              width: "75.99px",
              padding: "0px 5px 0px 5px"
            }}
          >
            {order.status}
          </div>
        </div>
      );
    } else if (order.status === "ready") {
      element = (
        <div id="delete-button" style={{ padding: "0px" }}>
          <div
            className="ready-btn"
            style={{
              float: "left",
              borderRadius: "2px",
              width: "75.99px",
              padding: "0px 5px 0px 5px"
            }}
          >
            <a
              style={{ color: "white" }}
              href="#"
              onClick={this.handleButtonToggle}
            >
              {order.status}
            </a>
          </div>
        </div>
      );
    }
    return element;
  };
  render() {
    let order = this.props.order;
    return (
      <tr>
        <td>{order.meal.name}</td>
        <td>{order.meal.price}</td>
        <td>{order.when}</td>
        <td>{order.menu_name}</td>
        <td>{order.caterer}</td>
        <td>
          <div className="flex-container" style={{ width: "75.99px" }}>
            {this.viewStatus(order)}
          </div>
        </td>
      </tr>
    );
  }
}

UserOrderView.propTypes = {
  order: PropTypes.object.isRequired,
  userEditStatus: PropTypes.func.isRequired,
  getOrders: PropTypes.func.isRequired
};

export default connect(
  null,
  { userEditStatus, getOrders }
)(UserOrderView);
