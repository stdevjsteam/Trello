import axios from '../../apis/axios';

export const cards = () => {
    return dispatch => {
        axios.get('/cards')
        .then(res => {
           dispatch({type: 'CARDS_FETCHED', payload: res.data});
        }).catch(e => {
            console.log(e)
        });  
    }
};


export const addCard = (label, listId) => { 
    return dispatch => {
        axios.post('/cards', { label, listId})
        .then(res => {
           dispatch({type: 'CARD_ADDED', payload: res.data});
        }).catch(e => {
            console.log(e)
        });  
    };
};


export const cardOrder = () => {
    let newOrder = [];
    return dispatch => {
        axios.get('/cardOrder')
            .then(res => {
                res.data.map( item => {
                    return item.cards.map(cardId => newOrder = [...newOrder, cardId]);
                });
                dispatch({type: 'CARD_ORDER_FETCHED', payload: newOrder});
            }).catch(e => {
            console.log(e)
        });
    };
};

// export const changeCardOrder = (lastIndex, currentIndex, order) => {
//     return dispatch => {
//         axios.put('/cardsOrder')
//             .then(res => {
//                 dispatch({type: 'CARD_ORDER_UPDATED', payload: res.data});
//             }).catch(e => {
//             console.log(e)
//         });
//     };
// };




















