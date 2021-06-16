const {createStore, combineReducers,applyMiddleware} = require("redux") 
const logger = require('redux-logger').default; 
const thunk = require('redux-thunk');
//type
const BUY_LAPTOP = "BUY_LAPTOP"; 
const BUY_MOBILE = "BUY-MOBILE";
//initialState 
const initialState = {
    numOfLaptops: 100
}
const initialMobiles ={
    numOfMobiles :1000
}

//Actions
const buyLaptop = () => {
    return {
        type: BUY_LAPTOP
    }
}   
const buyMobile= () => {
    return {
        type: BUY_MOBILE
    }
}  

//Reducers
const laptopReducer = (state = initialState, action) => {
    //   if(action.type ==="BUY_LAPTOP"){
    //       return {numOfLaptops:state.numOfLaptops}
    //   }else{
    //       return state; 
    //   } 
    switch (action.type) {
        case BUY_LAPTOP:
            return { numOfLaptops: state.numOfLaptops - 1 }
        default:
            return state;
    }

 }  
 //more than one reducers 

 const mobileReducer = (state = initialMobiles, action) => {
    //   if(action.type ==="BUY_LAPTOP"){
    //       return {numOfLaptops:state.numOfLaptops}
    //   }else{
    //       return state; 
    //   } 
    switch (action.type) {
        case BUY_MOBILE:
            return { numOfMobiles: state.numOfMobiles - 1 }
        default:
            return state;
    }

 }  
 //Store 
 const rootReducer = combineReducers({laptop:laptopReducer,mobiles:mobileReducer})
 const store = createStore(rootReducer,applyMiddleware(logger,thunk));
 //console.log(store); 
 store.subscribe(()=> {console.log(store.getState())});
 store.dispatch(buyLaptop());
 store.dispatch(buyLaptop());
 store.dispatch(buyLaptop()); 
 store.dispatch(buyLaptop());
 store.dispatch(buyLaptop());
 store.dispatch(buyMobile());
 store.dispatch(buyMobile());
 store.dispatch(buyMobile());
 store.dispatch(buyMobile());
 store.dispatch(buyMobile());
 store.dispatch(buyMobile());
 store.dispatch(buyMobile());
 store.dispatch(buyMobile());