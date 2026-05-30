export declare const TEMPLATE_AGENT_ID = "sin-simone-mcp";
export declare const TEMPLATE_AGENT_NAMESPACE = "simone.mcp";
export declare const TEMPLATE_AGENT_NAME = "SIN-Simone-MCP";
export declare const TEMPLATE_AGENT_DESCRIPTION = "Ultra-Duo Team Coder Agent with LSP-powered semantic code analysis, A2A-native async runtime, and cloud semantic memory.";
export declare const TEMPLATE_AGENT_VERSION = "2026.03.24";
export declare const TEMPLATE_AGENT_DEFAULT_HOST = "127.0.0.1";
export declare const TEMPLATE_AGENT_DEFAULT_PORT = 8234;
export declare const TEMPLATE_AGENT_SKILLS: readonly [{
    readonly id: "sin.simone.mcp.health";
    readonly name: "Health";
    readonly description: "Check Simone MCP readiness, model, and capabilities.";
}, {
    readonly id: "sin.simone.mcp.symbol.search";
    readonly name: "Symbol Search";
    readonly description: "Search for symbols across the codebase using LSP-powered semantic analysis.";
}, {
    readonly id: "sin.simone.mcp.structural.edit";
    readonly name: "Structural Edit";
    readonly description: "Perform structural code edits using LSP-grade symbol resolution and refactoring.";
}, {
    readonly id: "sin.simone.mcp.memory.query";
    readonly name: "Memory Query";
    readonly description: "Query the cloud semantic memory (pgvector) for code context and prior analysis results.";
}];
export declare function resolveTemplateAgentConfig(): {
    host: string;
    port: number;
    publicBaseUrl: string;
};
export declare function buildAgentCard(baseUrl: string): {
    name: string;
    description: string;
    version: string;
    documentationUrl: string;
    url: string;
    capabilities: {
        streaming: boolean;
        pushNotifications: boolean;
    };
    defaultInputModes: string[];
    defaultOutputModes: string[];
    skills: ({
        readonly id: "sin.simone.mcp.health";
        readonly name: "Health";
        readonly description: "Check Simone MCP readiness, model, and capabilities.";
    } | {
        readonly id: "sin.simone.mcp.symbol.search";
        readonly name: "Symbol Search";
        readonly description: "Search for symbols across the codebase using LSP-powered semantic analysis.";
    } | {
        readonly id: "sin.simone.mcp.structural.edit";
        readonly name: "Structural Edit";
        readonly description: "Perform structural code edits using LSP-grade symbol resolution and refactoring.";
    } | {
        readonly id: "sin.simone.mcp.memory.query";
        readonly name: "Memory Query";
        readonly description: "Query the cloud semantic memory (pgvector) for code context and prior analysis results.";
    })[];
    supportedInterfaces: {
        url: string;
        protocolBinding: string;
        protocolVersion: string;
    }[];
};
