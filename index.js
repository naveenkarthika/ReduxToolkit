const store = require('./app/store');
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./app/features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./app/features/user/userSlice').fetchUsers

console.log('Initial', store.getState())
store.subscribe(() => {
    console.log('store', store.getState())
})

store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restoked(2))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restoked(2))


