export type SimoneMcpAgentAction = {
    action: 'agent.help';
} | {
    action: 'sin.simone.mcp.health';
} | {
    action: 'sin.simone.mcp.symbol.search';
    query: string;
} | {
    action: 'sin.simone.mcp.structural.edit';
    editPayload: string;
} | {
    action: 'sin.simone.mcp.memory.query';
    query: string;
};
export declare function executeSimoneMcpAgentAction(action: SimoneMcpAgentAction): Promise<unknown>;
