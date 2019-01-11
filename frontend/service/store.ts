// Creating INITIAL-STORE
import createStore from 'redux-zero'

// You can split initialState to multiple sub-stores when necessary
const initialState = {
  relayerAuthorized: false,
}

const store = createStore(initialState)

export default store