import {Machine} from 'xstate';

import {useMachine} from '@xstate/react';

const blogMachine = Machine({
    id: 'blog',
    initial: 'idle',
    states:{
        idle: {
            on: { FETCH: 'loading' }
        },
        loading: {
            invoke: {
                src: 'fetchData',
                onDone: {
                    target: 'success',
                    actions: assign({
                        data: (_, event) => event.data
                    })
                },
                onError: {
                    target: 'failure',
                    actions: assign({
                        error: (_, event) => event.data
                    })
                }
            }
        },
        success: {
            entry: 'notifySuccess',
            type: 'final'
        },
        failure: {
            on: {
                RETRY: 'loading'
            }
        }

    }
})

export default blogMachine;

