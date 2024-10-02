import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import PaginateButton from "./PaginateButton";


const Search = () => {

    
    const [search, SetSearch] = useState([])
    const [currentPage, setCurrentPage] = useState(1) 
    const [postPerPage, setPerPage] = useState(3)

    // const [ProductsSearch, setProductsSearch] = useState('')
   

    useEffect( () =>{

        
        fetch('http://localhost:5000/searchData')
        .then( res => res.json())
        .then(data => SetSearch(data) )

    } , [] )

    const lastIndex = currentPage * postPerPage 
    const fastIndex = lastIndex - postPerPage 
    const currentPost = search.slice( fastIndex, lastIndex )


    // const handleSearch = e =>{
       
    //     e.preventDefault();

    //     const searchProducts = e.target.search.value 
    //     // console.log(searchProducts)
    //     setProductsSearch(searchProducts)



    // }




    return (
        <div className=" mt-10 ml-10 mr-10 mb-10">

            <div>

            
             {/* <div className=" flex justify-center">
                <div>
                 <form onSubmit={handleSearch} className=" flex items-center gap-2">
                 <input type="text" placeholder="Type here" name="search" className="input input-bordered input-info w-full max-w-xs" />
                 <input className=" btn " type="submit" value="Search" />
                 </form>   
                
                </div>
             </div>
  */}

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