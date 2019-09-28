import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; 
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        // console.log(this.props.asdf); -> '123'
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        // Whatever is returned will show up as props inside of booklist
        // asdf: '123';
        books: state.books
    };
}

// Anything returned from this function will end up as props in the booklist container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook},dispatch);
}

//promote booklist from a component to a container- it needs to know about
// this dispatch method , selectBook. Make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);