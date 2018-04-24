import React from "react";
import MyList from "../components/MyList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../actions/mainActions";
import PropTypes from "prop-types";
import * as API from "../API";

class Main extends React.Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    
    try {
      API.getList()
        .then(data => {
          this.updateState(data);
        })
        .catch(function(error) {
          console.log(error.message);
        });
    } catch (e) {}
  };

  updateState = data => {
    if (data != null) {
      this.props.mainActions.receiveData(data);
    }
  };

  render() {
    let items = [];
    if (this.props.items.data !== undefined) {
      items = this.props.items.data.stadiums;
    }
    return <MyList items={items} />;
  }
}
Main.propTypes = {
  mainActions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    items: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
