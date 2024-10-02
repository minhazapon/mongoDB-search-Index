import SearchDetails from "./SearchDetails";



const SearchList = ({search}) => {

    return (
        <div className=" flex justify-center mt-10 ">

            <div className=" grid  md:grid-cols-3 gap-5">

              {search.map( (search, index) => {

                   return (

                     <SearchDetails  key={index} image={search.image} name={search.name} price={search.price} ></SearchDetails>

                   )


              })}



            </div>
            
        </div>
    );
};

export default SearchList;