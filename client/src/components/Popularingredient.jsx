import React from 'react';
import vodka from '../images/vodka.png';
import rum from '../images/rum.png';
import scotch from '../images/scotch.png';
import tequila from '../images/tequila.png';
import * as apiService from '../services/apiService';
import Paginate from './Paginate';

class Popularingredient extends React.Component {
  state = {
    selectedIngredientList: [],
    mappedList: [],
  };

  selectIngredient = (e) => {
    const ingredient = e.target.id;

    apiService
      .searchByIngredient(ingredient)
      .then((res) => {
        this.setState({
          selectedIngredientList: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          {' '}
          <div className="row justify-content-md-center p-4">
            <Paginate
              component="Ingredient"
              drinks={this.state.selectedIngredientList}
            />
          </div>
        </div>

        <hr className="my-4" />
        <h1 style={{ color: 'white' }}>Popular Ingredients</h1>
        <div className="jumbotron row">
          <div>
            <img
              onClick={(e) => {
                this.selectIngredient(e);
              }}
              id="Rum"
              alt="rum"
              src={rum}
            />
            <img
              onClick={(e) => {
                this.selectIngredient(e);
              }}
              alt="Vodka"
              id="Vodka"
              src={vodka}
            />
            <img
              onClick={(e) => {
                this.selectIngredient(e);
              }}
              alt="Whiskey"
              id="Whiskey"
              src={scotch}
            />
            <img
              onClick={(e) => {
                this.selectIngredient(e);
              }}
              alt="Tequila"
              id="Tequila"
              src={tequila}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Popularingredient;
