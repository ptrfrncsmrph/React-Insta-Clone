// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.reducerComponent("Counter");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement(React.Fragment, undefined, React.createElement("button", {
                              onClick: (function (_e) {
                                  return Curry._1(self[/* send */3], /* Increment */0);
                                })
                            }, "+"), React.createElement("button", {
                              onClick: (function (_e) {
                                  return Curry._1(self[/* send */3], /* Decrement */1);
                                })
                            }, "-"), React.createElement("div", undefined, String(self[/* state */1][/* count */0])));
            }),
          /* initialState */(function (param) {
              return /* record */[/* count */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* count */state[/* count */0] - 1 | 0]]);
              } else {
                return /* Update */Block.__(0, [/* record */[/* count */state[/* count */0] + 1 | 0]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var jsComponent = ReasonReact.wrapReasonForJs(component, (function (_jsProps) {
        return make(/* array */[]);
      }));

export {
  component ,
  make ,
  jsComponent ,
  
}
/* component Not a pure module */