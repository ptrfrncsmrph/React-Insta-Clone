[%bs.raw {| require("./Comment.scss") |}];

let component = ReasonReact.statelessComponent("Comment");

let make = (~username, ~text, _children) => {
  ...component,
  render: _self =>
    <li className="comment-item">
      <h4 className="comment-username"> username->ReasonReact.string </h4>
      <p className="comment-text"> text->ReasonReact.string </p>
    </li>,
};

[@bs.deriving abstract]
type jsProps = {
  username: string,
  text: string,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~username=jsProps->usernameGet, ~text=jsProps->textGet, [||])
  );