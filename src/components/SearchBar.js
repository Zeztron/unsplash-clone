import React from "react";

class SearchBar extends React.Component {
    state = {term: ""};

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={event => this.onFormSubmit(event)}
                    className="ui form"
                >
                    <div className="field">
                        <label>Image Search App</label>
                        <input
                            placeholder="Search for High Quality Images"
                            type="text"
                            value={this.state.term}
                            onChange={e =>
                                this.setState({term: e.target.value})
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
