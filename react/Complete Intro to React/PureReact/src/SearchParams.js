import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import userDropdown from './useDropdown'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = userDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = userDropdown("Breed", "", breeds);

  return (
    <div className='search-params'>
      <h1>{location}</h1>
      <form>
        <label htmlFor='location'>
          location
          <input id='location' value={location} placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
        </label>
          <AnimalDropdown/>
          <BreedDropdown/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
