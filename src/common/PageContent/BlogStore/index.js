import {Machine, assign} from 'xstate';
import axios from 'axios';

import {useMachine} from '@xstate/react';

const base_url = `https://jsonplaceholder.typicode.com/posts`;
const getFetch = (context, _event) => 
    (callback, _onEvent) => {

        const {data} = context;
        axios.get(base_url).then(res => {
            const newData = res.data.data;
            callback({type:"DONE_MORE",newData });
        })
    }

const blogMachine = Machine({
    id: 'blog',
    initial: 'idle',
    context :{
        data :[]
    },  
    states:{
        idle: {
            on: { FETCH: 'loading' }
        },
        loading: {
            invoke: {
                id:'dataLoader',
                src: 'getFetch',
                on: {
                    DONE_MORE :{
                        transition: "more",
                        action: assign ({
                            data:({data}, {newData = []} ) => [...data, ...newData]
                        })
                    },
                    DONE_COMPLETED :{
                        transition: "complete",
                        action: assign ({
                            data:({data}, {newData = []} ) => [...data, ...newData]
                        })
                    },
                }
            }
        },
        more: {
            on:{
                LOAD: 'loading'
            }
        },
        complete: { type: 'final' },
        failure: { type: 'final' }
    }
})

export default blogMachine;

