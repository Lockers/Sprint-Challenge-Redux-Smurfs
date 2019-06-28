1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map .filter .reduce   ...spread is good for extending  or .concat() or object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the functions that send data from your app to your store they do not change state
Reducers tell the applications state to change in response to the actions sent to store
Store holds the whole of the applciations state, this is the place all your state lives, so it is the single source of truth in your applciation as you can only change it by dispathing an action on it. so you can always refer to store state for the truth of state

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, source of all state truth..
Component state is local, component state could be used when you only need to change something specific to that component


4.  What is middleware?
    middleware is a function that sits between the action and the reducer, these functions can interact with these actions giving them additional logic, such as making asynch requests or logging actions/reporting errors and so on

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux think is a middleware that allows us to make asynchronus updates to the redux store, it allows the action creators to return a function instead of an action, this can be used with some logic to delay the despatch of an action or only dispatch if a certain condition is met

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect()

