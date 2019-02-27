type item = {
  id: int,
  title: string,
  completed: bool,
  dateCreated: Js.Date.t,
};

type state = {
  items: list(item),
  inputText: string,
};

type action =
  | InputText(string)
  | Toggle(int)
  | RemoveItem(int)
  | Submit;

let component = ReasonReact.reducerComponent("Todo");

let make = _children => {
  let handleSubmit = state => {
    let newId: int = List.length(state.items);
    let newItem: item = {
      id: newId,
      title: state.inputText,
      completed: false,
      dateCreated: Js.Date.make(),
    };
    let newList = [newItem, ...state.items];
    ReasonReact.Update({items: newList, inputText: ""});
  };

  {
    ...component,

    initialState: () => {
      items: [
        {
          id: 0,
          title: "Fix more bugs",
          completed: false,
          dateCreated: Js.Date.fromString("December 12, 1992"),
        },
      ],
      inputText: "",
    },

    reducer: action => {
      switch (action) {
      | InputText(str) => (
          state => ReasonReact.Update({...state, inputText: str})
        )
      | Toggle(id) => (
          state =>
            ReasonReact.Update({
              ...state,
              items:
                state.items
                |> List.map((item: item) =>
                     item.id == id ?
                       {...item, completed: !item.completed} : item
                   ),
            })
        )
      | RemoveItem(id) => (
          state =>
            ReasonReact.Update({
              ...state,
              items:
                state.items |> List.filter((item: item) => item.id !== id),
            })
        )
      | Submit => handleSubmit
      };
    },

    render: self => {
      let {items, inputText} = self.state;
      <>
        <ul>
          {items
           |> List.map((item: item) =>
                <li key={string_of_int(item.id)}>
                  <div> {ReasonReact.string(item.title)} </div>
                  <div>
                    {item.dateCreated
                     |> DateFns.distanceInWords(Js.Date.make())
                     |> Js.String.concat(" ago")
                     |> ReasonReact.string}
                  </div>
                </li>
              )
           |> List.rev
           |> Array.of_list
           |> ReasonReact.array}
        </ul>
        <form
          onSubmit={e => {
            ReactEvent.Form.preventDefault(e);
            self.send(Submit);
          }}>
          <input
            value=inputText
            onChange={e =>
              self.send(InputText(ReactEvent.Form.target(e)##value))
            }
          />
          <button> {ReasonReact.string("Submit")} </button>
        </form>
      </>;
    },
  };
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));