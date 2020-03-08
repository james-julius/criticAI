import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({
    'currentPage': '/',
    'showModal': false,
    'menuActive': false,
    'inverseColor': false, 
    'user': false,
    'redirect': null
});

export { useGlobalState };