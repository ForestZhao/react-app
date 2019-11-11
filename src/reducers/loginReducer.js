const initState={
	app_name:'zjs'
}
export default (state=initState,action)=>{
    switch(action.type){
	  	case 'login':
	  		console.log('reducer...'+action.userName);
        	return {
            	...state,
            	userName:action.userName
        	}
        default:
            return state
    }
}