let state = {
    profilePage :{
        posts : [
            {id:1, message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
            {id:2, message: 'Great, we can go next step!', likeCount: 17},
            {id:3, message: 'Кто не работает, тот ест.', likeCount: 0},
            {id:4, message: 'Жить хорошо, а хорошо жить ещё лучше!', likeCount: 666}
        ]
    },
    dialogsPage:{
        dialogs : [
            {name:'Sasha', id:1},
            {name:'Pasha', id:2},
            {name:'Dasha', id:3},
            {name:'Masha', id:4},
            {name:'Glasha', id:5},
            {name:'Dimych', id:6}
        ],
        messages : [
            {id:1, message:'Hi'},
            {id:2, message:'How is your way to samurai?'},
            {id:3, message:'great work'},
            {id:4, message:'Yo'},
            {id:5, message:'YOOOO'},
            {id:6, message:'WAZZZZUUUP'}
        ]
    },
    sidebar:{}
};

export let addPost = (postMessage)=>{
    let newPost = {id:5, message:'Хорошо плывет, эта группа в полосатых купальниках.', likeCount:33};
state.profilePage.posts.push(newPost);
}



export default state