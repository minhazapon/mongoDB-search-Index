import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import PaginateButton from "./PaginateButton";


const Search = () => {

    
    const [search, SetSearch] = useState([])
    const [currentPage, setCurrentPage] = useState(1) 
    const [postPerPage, setPerPage] = useState(3)


    useEffect( () =>{

        
        fetch('http://localhost:5000/searchData')
        .then( res => res.json())
        .then(data => SetSearch(data) )

    } , [] )

    const lastIndex = currentPage * postPerPage 
    const fastIndex = lastIndex - postPerPage 
    const currentPost = search.slice( fastIndex, lastIndex )




    return (
        <div className=" mt-10 ml-10 mr-10 mb-10">

            <div>

            
             <div className=" flex justify-center">
                <div>
                <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs" />
                </div>
             </div>
 

            {/* --------------------------------------------------- */}


            <SearchList search={currentPost} ></SearchList>


            <div className=" flex justify-center mt-10">
                <PaginateButton  toTalPost={search.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} ></PaginateButton>
            </div>


            </div>
            
        </div>
    );
};

export default Search;