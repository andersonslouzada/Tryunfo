import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cardsList: [],
    hasTrunfo: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validateButton);
  };

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const validInputsText = (
      cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0
    );

    const maxValue = 90;
    const maxSum = 210;
    const validInputsNumber = (
      (Number(cardAttr1) < 0 || Number(cardAttr1) > maxValue)
      || (Number(cardAttr2) < 0 || Number(cardAttr2) > maxValue)
      || (Number(cardAttr3) < 0 || Number(cardAttr3) > maxValue)
    );

    const validSum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxSum);

    this.setState(
      { isSaveButtonDisabled: validInputsText || validInputsNumber || validSum },
    );
  };

  saveCards = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;
    if (cardTrunfo === true) this.state.hasTrunfo = true;

    this.setState((prevState) => ({ cardsList: [...prevState.cardsList,
      { cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardTrunfo }],
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardsList,
      isSaveButtonDisabled,
      hasTrunfo } = this.state;
    return (
      <main>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveCards }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          { cardsList.map((element) => (<Card
            key={ element.cardName }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardImage={ element.cardImage }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardRare={ element.cardRare }
            cardTrunfo={ element.cardTrunfo }
          />))}
        </div>
      </main>
    );
  }
}

export default App;
