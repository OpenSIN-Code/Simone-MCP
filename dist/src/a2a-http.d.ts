import { type IncomingMessage, type ServerResponse } from 'node:http';
export declare function createTemplateAgentHttpServer(): {
    server: import("http").Server<typeof IncomingMessage, typeof ServerResponse>;
    start(): Promise<void>;
    stop(): Promise<void>;
};
