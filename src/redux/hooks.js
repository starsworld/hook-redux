import {
    createContext,
    useMemo,
    useContext,
    useLayoutEffect,
    useReducer,
} from 'react';

function memoizeSingleArg(fn) {
    let value, prevArg;
    return function (arg) {
        if (prevArg !== arg) {
            prevArg = arg;
            value = fn(arg);
        }
        return value;
    }
}

export default function create() {
    const StoreContext = createContext();

    function useMappedState(mapState) {
        const store = useContext(StoreContext);
        if (!store) {
            throw new Error('Missing Provider!');
        }

        const memorizedMapState = useMemo(() => memoizeSingleArg(mapState), [
            mapState
        ]);
        const state = store.getState();
        const derivedState = memorizedMapState(state);

        const [, forceUpdate] = useReducer(x => x + 1, 0);

        useLayoutEffect(() => {
            let didUnsubscribe = false;

            function checkForUpdate() {
                // 组件已被卸载
                if (didUnsubscribe) {
                    return;
                }
                forceUpdate();
            }

            const unsubscribe = store.subscribe(checkForUpdate);

            return () => {
                didUnsubscribe = true;
                unsubscribe();
            }
        }, [store]);

        return derivedState;
    }

    function useDispatch() {
        const store = useContext(StoreContext);
        if (!store) {
            throw new Error('Missing Provider!');
        }
        return store.dispatch;
    }

    return {
        StoreContext,
        useDispatch,
        useMappedState
    }
}
