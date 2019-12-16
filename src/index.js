import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {name:'Sasha', id:1},
    {name:'Pasha', id:2},
    {name:'Dasha', id:3},
    {name:'Masha', id:4},
    {name:'Glasha', id:5},
    {name:'Dimych', id:6}
]
let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'How is your way to samurai?'},
    {id:3, message:'great work'},
    {id:4, message:'Yo'},
    {id:5, message:'YOOOO'},
    {id:6, message:'WAZZZZUUUP'}
]
let posts = [
    {message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
    {message: 'Great, we can go next step!', likeCount: 17},
    {message: 'Памагити йа не мэсный', likeCount: 0},
    {message: 'Кто-нибудь, убейте его словарем!', likeCount: 666}
];
ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
