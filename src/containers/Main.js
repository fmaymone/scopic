import React from "react";
import MyList from "../components/MyList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../actions/mainActions";
import PropTypes from "prop-types";
const mock = {
  stadiums: [
    {
      id: 1,
      name: "Luzhniki Stadium",
      city: "Moscow"
    },
    {
      id: 2,
      name: "Otkrytiye Arena",
      city: "Moscow"
    },
    {
      id: 3,
      name: "Krestovsky Stadium",
      city: "Saint Petersburg"
    }
  ]
};

class Main extends React.Component {

  componentDidMount() {
    this.loadData();
  }
  
  loadData() {
    this.props.mainActions.receiveData(mock);
  }

  render() {
    let items = [];
    if(this.props.items.data !== undefined){
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
