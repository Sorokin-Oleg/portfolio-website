import React, { Component } from "react";
import { connect } from "react-redux";

class PortfolioImage extends Component {
  constructor(props) {
    super(props);

    this.modalOpen = this.modalOpen.bind(this);
  }

  modalOpen() {
    const data = {
      modalActiveIndex: this.props.id,
      modalActive: true,
    };

    this.props.dispatch({
      type: "MODAL_ACTIVE",
      data,
    });
  }

  render() {
    return (
      <div className="portfolio-image-container" style={this.props.coverImage} onClick={this.modalOpen}>
        <h1 className="image-name-project">{this.props.nameProject}</h1>
        <div className="portfolio-image-hover">
          <i className="fas fa-rocket"></i>
          <h1>Go to Gallery</h1>
        </div>
      </div>
    );
  }
}

PortfolioImage.defaultProps = {
  nameProject: "Good Project",
  coverColor: { backgroundColor: "#eb4d4b" },
};

export default connect()(PortfolioImage);
