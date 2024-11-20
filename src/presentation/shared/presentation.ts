export interface PresentationInterface<T = any> {
    handle: (param: T, request?: any) => Promise<any>;
}
