import React from "react";
import MyList from "../components/MyList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "../actions/mainActions";
import PropTypes from "prop-types";
import * as API from "../API";

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }
  componentWillMount() {
    this.setState({ isLoading: true });
    this.loadData();
  }

  loadData = async () => {
    
    try {
       API.getList()
        .then(data => {
            this.updateState(data);
        })
        .then(data => this.setState({ isLoading: false }))
        .catch(function(error) {
          console.log(error.message);
        });
    } catch (e) {}
  };

  updateState = async (data) => {
    if (data != null) {
      await this.props.mainActions.receiveData(data);
    }
  };

  render() {
    const { isLoading  } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    const items = this.props.items.data.stadiums;
   
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
