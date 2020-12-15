const ADD_COMMENTS = 'ADD-COMMENTS'
let initialState = {
    comments: [
        {id: 1,
            name: 'Самуил  ',
            data:'  13 октября 2011',
            text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! '
        },
        {
            id: 2,
            name: 'Лилия Семёновна  ',
            data:'  14 октября 2011',
            text: 'Вероника, здравствуйте!Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
        },
        {
            id: 3,
            name: 'Лилия Семёновна  ',
            data:'  14 октября 2011',
            text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
        }
    ]
}

export const Reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            let body = action.CommentsPeople 
            return {
                ...state,
                comments: [...state.comments, {id: 4, name: 'Лилия Семёновна', data: '15 декабря 2020', text: body}]
            }
            
        default:
            return state
    }
}
export const addCommentsPeople=(CommentsPeople)=>({type: ADD_COMMENTS, CommentsPeople})





export default Reducer