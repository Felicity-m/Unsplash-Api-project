import React from "react"
import axios from "axios"
import SearchBar from "./SearchBar"
import ImageList from "./ImageList"



class App extends React.Component {
    state = {images: []}
    //Api request in the App component
    onSearchSubmit = async term  =>{
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                client_id: "LC5_-FJSnCbhINcH9iIetzvJ3XExBi7SE_R-ukfWoik", 
                query: term
            }
            


        })
        this.setState({images: response.data.results})


    }


    render(){
        return (
            <div className="ui container" style={{marginTop:"1rem"}}>
                <SearchBar showInConsole={this.onSearchSubmit}/>
               
                <ImageList images={this.state.images}/>

            </div>
            )

    }
    
}

export default App;