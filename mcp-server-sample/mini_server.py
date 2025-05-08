from mcp.server.fastmcp import FastMCP

mcp = FastMCP("hello")

@mcp.tool()
async def hello_world(name: str) -> str:
    return f"Hello, {name}!"

if __name__ == "__main__":
    # stdioで通信
    mcp.run(transport="stdio")