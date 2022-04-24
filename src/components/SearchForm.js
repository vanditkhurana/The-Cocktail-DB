import React from "react";

export default function SearchForm({setSearchTerm}) {
  const searchValue = React.useRef("");
  
  React.useEffect(()=>{
    searchValue.current.focus();
  }, []);
  function handleSubmit(e){
    e.preventDefault();
  }
  function searchCocktail(){
    setSearchTerm(searchValue.current.value);
  }
  return (
  <section className="section">
    <h2 className="section-title">Search Cocktails</h2>
    <form className="form search-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Search your favourite cocktail</label>
        <input type="text" name="name" id="name" onChange = {searchCocktail} ref={searchValue}/>
      </div>
    </form>
  </section>
  );
}
