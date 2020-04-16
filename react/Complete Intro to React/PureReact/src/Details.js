import React from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ThemeContext from './ThemeContext';


class Details extends React.Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         loading: true
  //     };
  // }
  state = { loading: true, name: "" };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{animal}</h2>
          <ThemeContext.Consumer>
              {(themeHook) => (
                  <button style={{backgroundColor: themeHook[0]}}>Adopt {name}</button>
              )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// const Details = props => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

export default Details;