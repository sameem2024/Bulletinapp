import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import {sub} from'date-fns';
const initialState = [
    {id:'1',
        title:'Learning Redux Toolkit',
        content:'I have learnt good libraries in react',
        date: sub(new Date(),{minutes:10}).toISOString(),
        reactions:{
            like:0,
            dislike:0,
            clap:0,
            wow:0,
            heart:0,
        }
    },
    {id:'2',
        title:'Slices....',
        content:'the more I say Slice,the more I want Pizzas',
        date: sub(new Date(),{minutes:5}).toISOString(),
        reactions:{
            like:0,
            dislike:0,
            clap:0,
            wow:0,
            heart:0,
        },
    },
];

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
            state.push(action.payload);
          },
          prepare(title,content,userId){
            return {
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId,
                    reactions:{
                        like:0,
                        dislike:0,
                        clap:0,
                        wow:0,
                        heart:0,
                    },
                }
            }
          }
    },

        reactionsAdded(state,action){
            const {id,reaction} = action.payload;
            const existingPost = state.find(item => item.id === id);
            if(existingPost){
                existingPost.reactions[reaction]++;
            }
        },
}
});

export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
export const {postAdded,reactionsAdded} = postSlice.actions;

