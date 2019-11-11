export const login = (dispatch) => async (dispatch) => {
	console.log('login...');
	alert(JSON.stringify(dispatch));
    dispatch({type:'login',userName:'zjs'})
}