import profileReducer, {actions} from './profile-reducer'
import {ProfileMessagesType} from '../types/types'

let state = {
    posts: [
        {id: 1, message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
        {id: 2, message: 'Great, we can go next step!', likeCount: 17},
        {id: 3, message: 'Кто не работает, тот ест.', likeCount: 0},
        {id: 4, message: 'Жить хорошо, а хорошо жить ещё лучше!', likeCount: 666}
    ]as Array<ProfileMessagesType>,
    profile: null,
    status: ''
};

it('new post should be added', () => {
    //1.test data
    let action = actions.addPostActionCreator("it-kamasutra.com");
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(5)
});

it('new post should be correct', () => {
    //1.test data
    let action = actions.addPostActionCreator("it-kamasutra.com");
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com")
});

it('after deleting length of messages should be decrement', () => {
    //1.test data
    let action = actions.deletePost(1);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3)
});