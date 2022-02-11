import React from "react";
import "./paginate.css";
import {
  Modal,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Carousel from "react-multi-carousel";
import * as apiService from "../services/apiService";

class Paginate extends React.Component {
  state = {
    mappedItems: [],
    currentItems: [],
    drinkSelected: false,
    selectedDrink: {},
    alphaList: [],
    glasses: [],
    types: [],
    categories: [],
    glassDrop: false,
    typeDrop: false,
    categoryDrop: false,
  };

  componentDidMount() {
    this.prepareAlphabets();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.drinks !== this.props.drinks) {
      this.filterDropDownMenus();
      const items = this.props.drinks;

      this.setState({
        currentItems: items,
        mappedItems: items.map(this.mapDrinks),
      });
    }
  }

  filterDropDownMenus = () => {
    console.log(this.props.drinks);
    const glasses = [];
    const types = [];
    const categories = [];
    const { drinks } = this.props;
    for (let i = 0; i < drinks.length; i++) {
      types.push(drinks[i].strAlcoholic);
      glasses.push(drinks[i].strGlass);
      categories.push(drinks[i].strCategory);
    }
    this.setState({
      glasses: [...new Set(glasses)].map(this.mapFilters),
      types: [...new Set(types)].map(this.mapFilters),
      categories: [...new Set(categories)].map(this.mapFilters),
    });
  };

  mapFilters = (el, index) => (
    <DropdownItem
      key={index}
      id={el}
      onClick={(e) => {
        this.selectDropDownItem(e);
      }}
    >
      {el}
    </DropdownItem>
  );

  prepareAlphabets = () => {
    const result = [];
    for (let i = 65; i < 91; i++) {
      result.push(
        <i
          id={String.fromCharCode(i)}
          style={{ width: 15, padding: 20, color: "white" }}
          type='button'
          key={i}
          onClick={(e) => this.onAlphabetClick(e)}
          value={String.fromCharCode(i)}
        >
          {String.fromCharCode(i)}
        </i>
      );
    }
    this.setState({ alphaList: result });
    // return result;
  };

  onAlphabetClick = (e) => {
    const alpha = e.target.id;

    const filteredList = this.state.currentItems.filter(
      (drink) => drink.strDrink.charAt(0) === alpha
    );

    this.setState({ mappedItems: filteredList.map(this.mapDrinks) });
  };

  toggleModal = () => {
    this.setState({ drinkSelected: !this.state.drinkSelected });
  };

  selectDrink = (drink) => {
    if (!drink.strIngredient1) {
      console.log("NOT FOUND");
      apiService.searchById(drink.idDrink).then((res) => {
        console.log(res);
        this.setState({ selectedDrink: res[0], drinkSelected: true });
      });
    } else {
      this.setState({ selectedDrink: drink, drinkSelected: true });
    }
  };

  mapDrinks = (drink) => (
    <div
      style={{ marginLeft: "76px" }}
      key={drink.idDrink}
      className='col-6 card text-center'
    >
      <div onClick={() => this.selectDrink(drink)} className='card-body'>
        <img
          className='img-fluid'
          style={{ height: "100px", width: "100px" }}
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
      </div>
      <div
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
        className='card-footer text-muted'
      >
        {" "}
        {drink.strDrink}
      </div>
    </div>
  );

  toggleDropDown = (e) => {
    this.setState({ [e.target.id]: !this.state.drop });
  };

  selectDropDownItem = (e) => {
    console.log(e.target.id);
    const items = this.state.currentItems;
    const filter = e.target.id;
    const filteredList = [];
    for (let i = 0; i < items.length; i++) {
      if (Object.values(items[i]).includes(filter)) {
        filteredList.push(items[i]);
      }
    }
    console.log(filteredList);

    this.setState({
      mappedItems: filteredList.map(this.mapDrinks),
      glassDrop: false,
      typeDrop: false,
      categoryDrop: false,
    });
  };

  render() {
    return (
      <>
        <div className='col-12'>
          <div className='col-12'>
            {this.state.currentItems.length > 0 ? this.state.alphaList : null}
            <br />
            {this.state.currentItems.length > 0 &&
            this.props.component === "Hero" ? (
              <div className='row text-center pb-3'>
                <div className='col-4'>
                  <Dropdown
                    isOpen={this.state.glassDrop}
                    toggle={(e) => this.toggleDropDown(e)}
                  >
                    <DropdownToggle
                      style={{ color: "blue" }}
                      id='glassDrop'
                      caret
                    >
                      Glass
                    </DropdownToggle>
                    <DropdownMenu>{this.state.glasses}</DropdownMenu>
                  </Dropdown>
                </div>
                <div className='col-4'>
                  <Dropdown
                    isOpen={this.state.typeDrop}
                    toggle={(e) => this.toggleDropDown(e)}
                  >
                    <DropdownToggle
                      style={{ color: "blue" }}
                      id='typeDrop'
                      caret
                    >
                      Type
                    </DropdownToggle>
                    <DropdownMenu>{this.state.types}</DropdownMenu>
                  </Dropdown>
                </div>
                <div className='col-4'>
                  <Dropdown
                    isOpen={this.state.categoryDrop}
                    toggle={(e) => this.toggleDropDown(e)}
                  >
                    <DropdownToggle
                      style={{ color: "blue" }}
                      id='categoryDrop'
                      caret
                    >
                      Category
                    </DropdownToggle>
                    <DropdownMenu>{this.state.categories}</DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Modal isOpen={this.state.drinkSelected}>
          <ModalBody>
            <div className='text-center'>
              <h3>{this.state.selectedDrink.strDrink}</h3>
              <img
                style={{ height: 425, width: 425 }}
                alt='Selected Drink'
                src={this.state.selectedDrink.strDrinkThumb}
              />
              <div className='col-sm-12 row'>
                <div className='col-sm-6'>
                  {" "}
                  <span>Ingredients</span>
                  <ul style={{ listStyleType: "none" }}>
                    {this.state.drinkSelected &&
                    this.state.selectedDrink.ingrediants
                      ? Object.keys(this.state.selectedDrink.ingrediants).map(
                          (key) => (
                            <li>{this.state.selectedDrink.ingrediants[key]}</li>
                          )
                        )
                      : null}
                  </ul>
                </div>
                <div className='col-sm-6'>
                  {" "}
                  <span>Glass</span>
                  <br />
                  {this.state.selectedDrink.strGlass}
                </div>
              </div>
              <div>
                <span>Instructions:</span>
                <br />
                {this.state.selectedDrink.strInstructions}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button onClick={this.toggleModal} className='btn btn-success'>
              Close
            </button>
          </ModalFooter>
        </Modal>
        {this.state.mappedItems.length > 0 ? (
          <div className='container'>
            <Carousel
              partialVisbile={false}
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              infinite
              autoPlay={this.props.deviceType !== "mobile"}
              autoPlaySpeed={1800}
              keyBoardControl
              customTransition='all .5'
              transitionDuration={1500}
              containerclassName='carousel-container'
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={this.props.deviceType}
              dotListclassName='custom-dot-list-style'
              itemclassName='slider-image-item-pl-3'
            >
              {this.state.mappedItems}
            </Carousel>
          </div>
        ) : null}
        ;
        {/* {this.state.mappedItems.length > 0 ? this.state.mappedItems : null} */}
      </>
    );
  }
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default Paginate;
