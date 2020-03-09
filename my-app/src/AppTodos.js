import React from "react";

var styles = {
  title: {
    paddingLeft: "20px",
    paddingRight: "50px",
    position: "relative"
  },
  delete: {
    marginLeft: "20px",
    marginRight: "50px"
  }
};

class AppTodos extends React.Component {
  handleChangeComplete = () => {
    // let newComplete = this.props;
    this.props.ChangeCompleteItem(this.props.id);
  };

  handleDelete = () => {
    this.props.DeleteItem(this.props.id);
  };

  render() {
    return (
      <div className="comment">
        <div className="content">
          <span
            className="author"
            style={styles.title}
            onClick={this.handleChangeComplete}
          >
            {this.props.text}
            <span className={this.props.complete ? "line" : ""} />
          </span>
          <span className="author" style={styles.title}>
            {this.props.complete ? "已完成" : "未完成"}
          </span>
          <span className="author">{this.props.id}</span>
          <span
            className="button"
            style={styles.delete}
            onClick={this.handleDelete}
          >
            删除
          </span>
        </div>
      </div>
    );
  }
}

export default AppTodos;
