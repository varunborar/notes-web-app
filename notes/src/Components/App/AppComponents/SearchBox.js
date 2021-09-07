import React , {Component} from 'react';


class SearchBox extends Component{

    constructor(props){
        super();
    }

    render(){
        return(
            <div className="search-box">
               <input className="search-content" placeholder="Search"></input>
               <div className="search-icon" role="button">
                   <div id="search-icon" className="fas fa-search"></div>
               </div>
            </div>
        )
    }
}
    

export default SearchBox;
