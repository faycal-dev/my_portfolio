import React from "react";
import { Button } from "reactstrap";
import { Plus } from "react-feather";
import { connect } from "react-redux";
import emailjs from "emailjs-com";
import {
  handleSidebar,
  handleSelectedEvent,
} from "../../../redux/actions/calendar/index";
const AddEventButton = (props) => {
  return (
    <Button.Ripple
      color="primary"
      onClick={() => {
        // props.handleSidebar(true)
        // props.handleSelectedEvent(null)

        emailjs
          .send(
            "service_h83tkke",
            "template_pewhnzf",
            { title: "hello", email: "test", message: "test test test" },
            "user_xHUQf13pRDK3FK2uPVbGH"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }}
      className="d-sm-block d-none"
    >
      {" "}
      <Plus size={15} /> <span className="align-middle">Add</span>
    </Button.Ripple>
  );
};

export default connect(null, { handleSidebar, handleSelectedEvent })(
  AddEventButton
);
