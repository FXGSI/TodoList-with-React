import React from "react";
import uuid from 'uuid';

var styles = {
  title: {
    width: 200,
    display: "inline-block",
    marginRight: 10,
    verticalAlign: "top"
  }
};

class AppForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let text = this.refs.text.value;
    if (!text.trim()) {
      alert("输入不能为空");
      return;
    }
    let id = uuid();
    // let id = 1;
    this.props.AddTodoItem({ id, text, complete: false });
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="field" style={styles.title}>
          <input type="text" placeholder="TODO" ref="text" />
        </div>
        <button type="submit" className="button">
          添加
        </button>
      </form>
    );
  }
}

export default AppForm;
