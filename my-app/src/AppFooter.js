import React from "react";

var styles = {
  title: {
    marginRight: 10,
    fontSize: 20
  },

  top: {
    marginTop: 20
  }
};

class AppFooter extends React.Component {
  handleAll = () => {
    let all = this.refs.all.value;
    this.props.SubmitChooseValue(all);
  };

  handleActive = () => {
    let active = this.refs.active.value;
    this.props.SubmitChooseValue(active);
  };

  handleComplete = () => {
    let complete = this.refs.complete.value;
    this.props.SubmitChooseValue(complete);
  };

  render() {
    return (
      <div>
        <h2 style={styles.top}>show</h2>
        <button
          type="submit"
          style={styles.top}
          className="button"
          value="1"
          ref="all"
          onClick={this.handleAll}
        >
          全部
        </button>
        <button
          type="submit"
          style={styles.top}
          className="button"
          value="2"
          ref="active"
          onClick={this.handleActive}
        >
          还未完成
        </button>
        <button
          type="submit"
          style={styles.top}
          className="button"
          value="3"
          ref="complete"
          onClick={this.handleComplete}
        >
          已完成
        </button>
      </div>
    );
  }
}

export default AppFooter;
