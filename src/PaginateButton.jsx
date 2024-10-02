


const PaginateButton = ({toTalPost, postPerPage, setCurrentPage}) => {
     
    let page = [] 

    for( let i =1; i <= Math.ceil(toTalPost/postPerPage); i++ ){

      page.push(i)

    }


    return (
        <div>

            {
                page.map( (page, index) =>{

                  return <div className="join">
                  <button onClick={() => setCurrentPage(page) } className="join-item btn hover:bg-black text-blue-500  " key={index}> {page} </button>
                  </div>


                } )



            }
            
        </div>
    );
};

export default PaginateButton;