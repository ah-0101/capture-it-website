const SET_PIC = 'product/setList';

const setList = (pic) => ({
    type: SET_PIC,
    pic
})

export const getProduct = () => async(dispatch) => {
    const res = await fetch(`/api/product`)
    const data = await res.json();
    dispatch(setList(data));
    return res;
}

function reducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case SET_PIC:
            newState = {};
            action.pic.forEach(item => {
                newState[item.id] = {
                    id: item.id,
                    picture: item.picture,
                    description: item.description
                }
            })
            return newState;
        default:
            return state
    }
}
export default reducer;



// {product?.map(item=>(
//     <>
//     {/* <li>{item.body}</li> */}
//     <img src={item.picture} />
//     </>

// ))}