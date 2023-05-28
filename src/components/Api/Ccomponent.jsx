import React, { Component } from "react";
import s from "/Users/VICTUS/.vscode/html/lab_9/src/components/First_section/First_section.module.css";
class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading</p>;
    } else {
      return (
        <div>
          <a href="/main" className={s.logobox}>
            <img
              src="https://v.fastcdn.co/u/f91f856b/61499007-0-Meetup20YearsAlt.png"
              alt=""
              id={s.logo}
            />
          </a>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                {item.strDrink}
                <img width="50" height="50" src={item.strDrinkThumb} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default Ccomponent;
