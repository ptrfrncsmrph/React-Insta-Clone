type action =
  | Increment
  | Decrement;

type state = {count: int};

let component = ReasonReact.reducerComponent("Counter");

let make = _children => {
  ...component,
  initialState: () => {count: 0},
  reducer: (action, state) =>
    switch (action) {
    | Increment => ReasonReact.Update({count: state.count + 1})
    | Decrement => ReasonReact.Update({count: state.count - 1})
    },
  render: self =>
    <>
      <button onClick={_e => self.send(Increment)}>
        {ReasonReact.string("+")}
      </button>
      <button onClick={_e => self.send(Decrement)}>
        {ReasonReact.string("-")}
      </button>
      <div> {ReasonReact.string(string_of_int(self.state.count))} </div>
    </>,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));