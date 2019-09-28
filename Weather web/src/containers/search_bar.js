import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        // State of the component
        this.state = { term: ''};
        // Bind the onInputChange method to SearchBar class(to use this.setState)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({term : event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault(); // Prevent page reload by stoping the submit request
        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Get a five-day forecast of your favorite cities" 
                className="form-control" 
                value={this.state.term}
                onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather },dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);