import {
  ADD_CARD,
  DECREASE_QUANTITY,
  DELETE_ALL_CARDS,
  DELETE_CARD,
  INCREASE_QUANTITY,
} from "../types/CardTypes";

const INITIAL_STATE = {
  cards: [],
  numberCard: 0,
};

export const CardReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD:
      if (state.numberCard === 0) {
        let card = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.cards.push(card);
      } else {
        let check = false;
        state.cards.map((item, key) => {
          if (item.id === action.payload.id) {
            state.cards[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _card = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.cards.push(_card);
        }
      }
      return {
        ...state,
        numberCard: state.numberCard + 1,
      };

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => {
          return card.id !== action.payload;
        }),
      };
    case INCREASE_QUANTITY:
      state.numberCard++;
      state.cards[action.payload].quantity++;
      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.cards[action.payload].quantity;
      if (quantity > 1) {
        state.numberCard--;
        state.cards[action.payload].quantity--;
      }

      return {
        ...state,
      };

    case DELETE_ALL_CARDS:
      return {
        ...state,
        cards: [],
      };
    default:
      return state;
  }
};
