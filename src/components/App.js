import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
                params: {
                    query: term
                },
                headers: {
                    Authorization:
                        "Client-ID 68055bf6f199dedeb726f6e33548dbdc3e68858c741baf581852a0c77f4d309c"
                }
            }
        );

        console.log(response.data.results);
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
