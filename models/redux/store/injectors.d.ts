export function convertSagaArray(sagas: any): any;
export function injectReducer({ key, reducer }: {
    key: any;
    reducer: any;
}, store?: null): void;
export function injectSaga({ key, saga }: {
    key: any;
    saga: any;
}, store?: null): void;
export function injectRedux({ key, reducer, saga }: {
    key: any;
    reducer: any;
    saga: any;
}, store?: null): void;
export function useInjectRedux({ key, reducer, saga }: {
    key: any;
    reducer: any;
    saga: any;
}, store?: null): void;
