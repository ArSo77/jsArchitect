import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import userDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from './ThemeContext'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = userDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = userDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    console.log("request pets!!! async");
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={e => {
          console.log("submit");
          e.preventDefault();
          requestPets();
          console.log("pets", pets);
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          ThemeContext
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}>
              <option value="pink">Pink</option>
              <option value="darkblue">Dark blue</option>
            </select>
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
