// starter code commented out

// import React from "react";

// function Search({ searchTerm, onChangeSearch }) {
//   function handleChange(event) {
//     onChangeSearch(event.target.value);
//   }

//   return (
//     <div className="ui search">
//       <div className="ui icon input">
//         <input className="prompt" value={searchTerm} onChange={handleChange} />
//         <i className="search icon" />
//       </div>
//     </div>
//   );
// }

// export default Search;

import React from "react";

function Search({ searchInput, setSearchInout }) {
  
  function handleChange(e) {
    setSearchInout(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={searchInput} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;