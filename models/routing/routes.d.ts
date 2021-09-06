import { Loadable } from 'react-loadable';
import { RouteConfig } from 'react-router-config';
import { Entry, Node } from 'contensis-delivery-api/lib/models';
import React from 'react';
declare type RouteComponent<Props> = Loadable | React.ComponentType<Props>;
declare type RouteNode = Node & {
    ancestors: Node[];
    children: Node[];
};
export declare type AppRoutes = {
    ContentTypeMappings: ContentTypeMapping[];
    StaticRoutes: StaticRoute[];
};
export declare type AppRootProps = {
    routes: AppRoutes;
    withEvents: WithEvents;
};
export declare type RouteLoaderProps = {
    loadingComponent?: React.ComponentType;
    notFoundComponent?: React.ComponentType;
};
export declare type EntryMapper = (<MappedProps>(node: RouteNode, state?: any) => MappedProps | unknown) | (<MappedProps>(node: RouteNode, state?: any) => Promise<MappedProps | unknown>);
export declare type ReduxInjector = () => Promise<{
    key: string;
    reducer: any;
    saga: any;
}>;
export declare type ContentTypeMapping = {
    contentTypeID: string;
    component: RouteComponent<any>;
    entryMapper?: EntryMapper;
    fields?: string[];
    injectRedux?: ReduxInjector;
    linkDepth?: number;
    nodeOptions?: {
        children?: {
            fields?: string[];
            linkDepth?: number;
        };
    };
    requireLogin?: boolean;
};
export declare type StaticRoute = Omit<RouteConfig, 'component'> & {
    component: RouteComponent<any>;
    fetchNode?: boolean;
    fetchNodeLevel?: number;
    injectRedux?: ReduxInjector;
    ssr?: boolean;
    ssrOnly?: boolean;
};
export declare type OnRouteLoadArgs = {
    location: {
        pathname: string;
        search: string;
        hash: string;
        key?: string;
    };
    path: string;
    staticRoute: StaticRoute;
    statePath: string;
};
export declare type OnRouteLoadedArgs = {
    entry: Entry | any;
    location: {
        pathname: string;
        search: string;
        hash: string;
        key?: string;
    };
    path: string;
    staticRoute: StaticRoute;
};
export declare type RouteLoadOptions = {
    customNavigation?: boolean | {
        ancestors: boolean | number;
        children: boolean | number;
        siblings: boolean | number;
        tree: boolean | number;
    };
    customRouting?: boolean;
    defaultLang?: string;
    entryLinkDepth?: number;
    preventScrollTop?: boolean;
    refetchNode?: true;
};
export declare type RouteLoadedOptions = {
    requireLogin?: boolean;
};
export declare type WithEvents = {
    onRouteLoad: (args: OnRouteLoadArgs) => Generator<void | RouteLoadOptions>;
    onRouteLoaded: (args: OnRouteLoadedArgs) => Generator<void | RouteLoadedOptions>;
};
export {};
