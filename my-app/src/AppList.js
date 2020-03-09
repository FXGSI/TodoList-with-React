import React from "react";
import AppTodos from "./AppTodos";

class AppList extends React.Component {
  SubmitDelete = id => {
    this.props.DeleteItemTop(id);
  };

  ChangeDone = id => {
    this.props.ChangeCompleteTop(id);
  };

  render() {
    var value = this.props.choosevalue;
    console.log("value", value);
    console.log("data", this.props.data);
    const a = this.props.data.map(
      ({ id, text, complete, deleteFlag }, index) => {
        if (value === "1" && deleteFlag !== true) {
          return (
            <AppTodos
              key={index}
              id={id}
              text={text}
              complete={complete}
              ChangeCompleteItem={this.ChangeDone}
              DeleteItem={this.SubmitDelete}
            />
          );
        }

        if (value === "2" && complete === false && deleteFlag !== true) {
          return (
            <AppTodos
              key={index}
              id={id}
              text={text}
              complete={complete}
              ChangeCompleteItem={this.ChangeDone}
              DeleteItem={this.SubmitDelete}
            />
          );
        }

        if (value === "3" && complete === true && deleteFlag !== true) {
          return (
            <AppTodos
              key={index}
              id={id}
              text={text}
              complete={complete}
              ChangeCompleteItem={this.ChangeDone}
              DeleteItem={this.SubmitDelete}
            />
          );
        }
        return true;
      }
    );

    return <div> {a} </div>;
  }
}

export default AppList;
