import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          Nome:
          <input
            id="cardName"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição:
          <input
            id="cardDescription"
            type="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="cardAttr1">
          attr1:
          <input
            id="cardAttr1"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="cardAttr2">
          attr2:
          <input
            id="cardAttr2"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="cardAttr3">
          attr3:
          <input
            id="cardAttr3"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="cardImage">
          imagem
          <input
            id="cardImage"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade:
          <select
            id="cardRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        {
          !hasTrunfo
            ? (
              <label htmlFor="cardTrunfo">
                Super Trunfo
                <input
                  id="cardTrunfo"
                  type="checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  data-testid="trunfo-input"
                />
              </label>
            )
            : <p>Você já tem um Super Trunfo em seu baralho</p>
        }

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
