module Styles = {
  open Css;

  let fontSize_ = rem(0.9);

  let commentItem = style([margin2(~v=rem(0.5), ~h=rem(0.0))]);

  let commentUsername =
    style([fontSize(fontSize_), marginRight(ch(1.0)), display(inline)]);

  let commentText = style([fontSize(fontSize_), display(inline)]);
};

let component = ReasonReact.statelessComponent("Comment");

let make = (~username, ~text, _children) => {
  ...component,
  render: _self =>
    <li className=Styles.commentItem>
      <h4 className=Styles.commentUsername> username->ReasonReact.string </h4>
      <p className=Styles.commentText> text->ReasonReact.string </p>
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