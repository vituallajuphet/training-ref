import {Machine} from 'xstate';

import {useMachine} from '@xstate/react';

const stateMachine = Machine({
    id: 'toggle',
    initial: 'unknown',
    states:{
        unknown:{ always:'active'},
        inactive:{ on:{ TOGGLE:"active" } },
        active:{ on:{TOGGLE:"inactive" } }
    }
})

export default stateMachine;

