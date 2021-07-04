import React from "react";
import { Input, Label, Card, Row, Col, Button, Spinner } from "reactstrap";
import { Send } from "react-feather";
import emailjs from "emailjs-com";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../assets/scss/plugins/extensions/editor.scss";
import SweetAlert from "react-bootstrap-sweetalert";

class Contact extends React.Component {
  state = {
    title: "",
    email: "",
    message: "",
    editorState: EditorState.createEmpty(),
    isLoading: false,
    errorAlert: false,
    errorText: "",
    validAlert: false,
  };

  handleAlert = (state, value, text) => {
    this.setState({ [state]: value, errorText: text });
  };
  handleSend = async () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      emailRegex.test(this.state.email.toLowerCase()) &&
      this.state.message.trim() !== "" &&
      this.state.title.trim() !==""
    ) {
      this.setState({ isLoading: true });
      emailjs
        .send(
          "service_h83tkke",
          "template_pewhnzf",
          {
            title: this.state.title,
            email: this.state.email,
            message: this.state.message,
          },
          "user_xHUQf13pRDK3FK2uPVbGH"
        )
        .then(
          (result) => {
            this.handleAlert(
              "validAlert",
              true,
              "Email sent, Expect a response within the next 24h"
            );
            this.setState({ isLoading: false });
          },

          (err) => {
            this.handleAlert("errorAlert", true, "Network Error");
            this.setState({ isLoading: false });
          }
        );
    } else {
      this.handleAlert("errorAlert", true, "Enter valid inputs !");
    }
  };
  render() {
    return (
      <Card className="pt-1 pl-3 pr-3 pb-2">
        {this.state.isLoading ? (
          <div
            style={{ height: window.innerHeight * 0.75 }}
            className="text-center mt-4"
          >
            <Spinner
              style={{ width: "5rem", height: "5rem" }}
              color="warning"
            />
          </div>
        ) : (
          <div>
            <Row>
              <Col>
                <Label className="mb-50" for="Title">
                  Email title
                </Label>
                <Input
                  type="text"
                  id="Title"
                  // placeholder="Titre du créneau"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </Col>
              <Col>
                <Label className="mb-50" for="Email">
                  Your Email address
                </Label>
                <Input
                  type="text"
                  id="Email"
                  // placeholder="Titre du créneau"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col>
                <Editor
                  onChange={(e) => {
                    this.setState({ message: e.blocks[0].text });
                  }}
                  placeholder="Your message ..."
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  defaultEditorState={this.state.editorState}
                  toolbar={{
                    options: ["inline", "fontSize", "textAlign"],
                    inline: {
                      options: ["bold", "italic", "underline"],
                      bold: { className: "bordered-option-classname" },
                      italic: { className: "bordered-option-classname" },
                      underline: { className: "bordered-option-classname" },
                    },
                  }}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-start">
              <Col>
                <Button.Ripple
                  color="white"
                  size="lg"
                  outline
                  onClick={this.handleSend}
                >
                  <Send size={22} /> Send Email !
                </Button.Ripple>
              </Col>
            </Row>
            <SweetAlert
              error={this.state.errorAlert}
              success={this.state.validAlert}
              title={this.state.errorAlert ? "Error" : "Thank You"}
              show={this.state.errorAlert || this.state.validAlert}
              onConfirm={() =>
                this.handleAlert(
                  this.state.validAlert ? "validAlert" : "errorAlert",
                  false
                )
              }
            >
              <p className="sweet-alert-text">{this.state.errorText}</p>
            </SweetAlert>
          </div>
        )}
      </Card>
    );
  }
}
export default Contact;
