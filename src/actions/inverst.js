// import 'whatwg-fetch'

import { spin,spinHidden } from './spin'
import Config from '../config'
export const INVERST_LIST = 'INVERST_LIST'
export const INVERST_ITEM = 'INVERST_ITEM'

export function inverstList(list){
	return {
		type: INVERST_LIST,list
	}
}

export function inverstItem(inverst){
	return {
		type: INVERST_ITEM,inverst
	}
}

export function inverstListApi(index){
	 return dispatch => {
	 	// dispatch(spin())

	 	fetch(Config.inverstsAPI,{
			//mode: "cors"
			}).then(function(response) {
				
    return response.json()
  }).then(function(json) {
     dispatch(inverstList(json))
     // dispatch(spinHidden())
  }).catch(function(ex) {
     console.log('parsing failed', ex)
     // dispatch(spinHidden())
  })}
}


export function inverstItemApi(index){
	 return dispatch => {
	 	dispatch(spin())

	 	fetch(Config.inverstAPI + '?id=' + index,{
			//mode: "cors"
			}).then(function(response) {
				
    return response.json()
  }).then(function(json) {
  	 let inverst 
  	 for( let obj of json.result.productList ){
  	 	 if( obj.id == index ){
  	 	 	inverst = obj
  	 	 	break
  	 	 }
  	 }

     dispatch(inverstItem(inverst))
     dispatch(spinHidden())
  }).catch(function(ex) {
    console.log('parsing failed', ex)
    dispatch(spinHidden())
  })}
}