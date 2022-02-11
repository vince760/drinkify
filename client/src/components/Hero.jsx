import React from 'react';
import './hero.css';

import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from 'reactstrap';
import * as apiService from '../services/apiService';

import margaritaImage from '../images/margarita.png';
import Paginate from './Paginate';

class Hero extends React.Component {
  state = {
    randomDrinks: [],
    searchQuery: '',
    queryResults: [],
    currentPage: 0,
    selectedDrink: {},
    drinkSelected: false,
  };

  componentDidMount() {
    apiService.getRandomDrinks().then((res) => {
      this.setState({ randomDrinks: res.map(this.mapRandomDrinks) });
    });
  }

  mapRandomDrinks = (drink) => (
    <div style={{ padding: '20' }} key={drink.idDrink}>
      {' '}
      <Card>
        <CardBody>
          <CardTitle tag="h5">{drink.strDrink}</CardTitle>
          <img className="img-fluid" src={drink.strDrinkThumb} alt="Drink" />

          <CardSubtitle
            style={{ paddingTop: '8px' }}
            className="mb-2 text-muted"
            tag="h6"
          >
            {drink.strAlcoholic}
          </CardSubtitle>
          <CardText style={{ height: '140px', overflowY: 'auto' }}>
            {drink.strInstructions}
          </CardText>
          <Button>View</Button>
        </CardBody>
      </Card>
    </div>
  );

  prepareAlphabets = () => {
    const result = [];
    for (let i = 65; i < 91; i++) {
      result.push(
        <i
          id={String.fromCharCode(i)}
          style={{ width: 15, padding: 20, color: 'white' }}
          type="button"
          key={i}
          onClick={(e) => this.onAlphabetClick(e)}
          value={String.fromCharCode(i)}
        >
          {String.fromCharCode(i)}
        </i>,
      );
    }
    this.setState({ alphaList: result });
    // return result;
  };

  onAlphabetClick = (e) => {
    const alpha = e.target.id;

    const filteredList = this.state.queryResults.filter(
      (drink) => drink.strDrink.charAt(0) === alpha,
    );
    console.log(filteredList);
    this.setState({ mappedQueryResult: filteredList.map(this.mapSearchQuery) });
  };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleInputSearch = () => {
    document.getElementById('searchBox').value = null;
    apiService
      .searchByDrinkName(this.state.searchQuery)
      .then((res) => {
        // Need to loop through all the drinks, get the values of the ingrediants and compile an array with all ingredients
        res.forEach((drink) => {
          const keys = Object.keys(drink);
          const value = Object.values(drink);

          let ingrediantsArray = [];
          let measurementsArray = [];
          for (let i = 0; i < value.length; i++) {
            // Need to get the index of all ingrediants, and index of all measurements then combine them.
            const newObject = { ingrediant: '', measurement: '' };

            const cleanIndex = keys[i].slice(3).replace(/[0-9]/g, '');

            if (cleanIndex === 'Ingredient') {
              ingrediantsArray.push(value[i]);
            } else if (cleanIndex === 'Measure') {
              measurementsArray.push(value[i]);
            }
            ingrediantsArray = ingrediantsArray.filter((el) => el != null);
            measurementsArray = measurementsArray.filter((el) => el != null);
          }
          const result = {};
          ingrediantsArray.forEach(
            (ingrediant, i) => (result[ingrediant] = measurementsArray[i]
              ? measurementsArray[i]
              : ''),
          );

          // Then assign that array to a new variable before setting state
          drink.ingrediants = result;
        });

        this.setState({
          queryResults: res,
          mappedQueryResult: res.map(this.mapSearchQuery),
          searchQuery: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  mapSearchQuery = (drink) => (
    <tr
      onClick={() => {
        this.setState({ selectedDrink: drink, drinkSelected: true });
      }}
    >
      <th className="imageRow" scope="row">
        <img
          style={{ height: 50, width: 50 }}
          className="tableImage"
          alt="Drink"
          src={drink.strDrinkThumb}
        />
      </th>
      <td>{drink.strDrink}</td>
      <td>{drink.strAlcoholic}</td>
      <td>{drink.strCategory}</td>
    </tr>
  );

  toggleModal = () => {
    this.setState({ drinkSelected: !this.state.drinkSelected });
  };

  render() {
    return (
      <div className="containerFluid">
        <div style={{ alignContent: 'center' }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  className="img-fluid"
                  style={{ height: '50%', width: '50%' }}
                  alt="Margarita"
                  src={margaritaImage}
                />
              </div>
              <div className="col-6">
                <h1 style={{ color: 'white' }} className="display-3">
                  Welcome to Drinkify
                </h1>
                <p style={{ color: 'white' }} className="lead">
                  A place to find random drinks! Select from your favorite
                  ingredients, liquor, or browse by name!
                </p>
              </div>
              <div className="col">
                <img
                  className="img-fluid"
                  style={{ height: '50%', width: '50%' }}
                  alt="Margarita"
                  src={margaritaImage}
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="col-10 offset-md-1">
              <div className="row">
                <div className=" p-3">
                  {' '}
                  <input
                    onChange={(e) => {
                      this.handleInputChange(e);
                    }}
                    id="searchBox"
                    className="col-3"
                    placeholder="Search by drink name "
                    type="text"
                  />
                </div>
                <div>
                  {' '}
                  <button
                    onClick={this.handleInputSearch}
                    type="button"
                    className="col-1 btn btn-primary"
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="row justify-content-md-center p-4">
                {' '}
                <Paginate component="Hero" drinks={this.state.queryResults} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
