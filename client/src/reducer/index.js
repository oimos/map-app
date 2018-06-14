import { INCREMENT } from '../type'

const initialState = {
  fuga: 1
}

const reducer = (state = initialState, action) => {
  console.log(state.fuga + 1)
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        fuga: state.fuga + 1
      }
    default:
      return state
  }
}

export default reducer;