import React from "react";
import "./App.css";
import AppList from "./AppList.js";
import AppForm from "./AppForm.js";
import AppFooter from "./AppFooter.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosevalue: "1",
      data: this.props.data
    };
  }
  OnAddTodoItem = newItem => {
    let newdata = this.state.data.concat(newItem);
    console.log('newdata',newdata)
    this.setState({ data: newdata });
  };
  ChooseValue = id => {
    this.setState({ choosevalue: id });
  };
  AllChangeComplete = id => {
    let newdata = this.state.data.map((item, index) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    this.setState({ data: newdata });
  };

  AllOnDeleteItem = id => {
    console.log(id);
    let newdata = this.state.data.map(function(item) {
      console.log(item);
      if (item.id === id) {
        item.deleteFlag = true;
      }
      return item;
    });
    this.setState({ data: newdata });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="comments">
        <h1>My Todo with React</h1>
        <AppForm AddTodoItem={this.OnAddTodoItem} />
        <AppList
          data={data}
          choosevalue={this.state.choosevalue}
          ChangeCompleteTop={this.AllChangeComplete}
          DeleteItemTop={this.AllOnDeleteItem}
        />
        <AppFooter SubmitChooseValue={this.ChooseValue} />
      </div>
    );
  }
}

export default App;
