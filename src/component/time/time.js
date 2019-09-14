import React from "react";
import DatePicker from "react-datepicker";

// import "../../pages/orderpage/node_modules/react-datepicker/dist/react-datepicker.css";

class Time extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="Pp"
      />
    );
  }
}

export default Time;
