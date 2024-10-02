

const SearchDetails = ( { image, name, price } ) => {



    return (
        <div>

        <div className="max-w-xs p-6 rounded-md shadow-md bg-gradient-to-r from-black to-blue-900 text-gray-50">
        	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
        	<div className="mt-6 mb-2">
        		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400"> {name} </span>
        		<h2 className="text-xl font-semibold tracking-wide"> {price} </h2>
        	</div>
        	<p className="text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        </div>
            
        </div>
    );
};

export default SearchDetails;