# Generated by https://smithery.ai. See: https://smithery.ai/docs/config#dockerfile
FROM oven/bun:latest

WORKDIR /app

# Copy the entire repository into a subdirectory to match expected structure
COPY . /app/gemini-docs-mcp

# Install dependencies in the subdirectory
WORKDIR /app/gemini-docs-mcp
RUN bun install --ignore-scripts

# Ensure the default prompt file exists
RUN mkdir -p prompts && echo "Default prompt content" > prompts/default.txt

# Set workdir back to /app for running the command
WORKDIR /app

CMD ["bun", "/app/gemini-docs-mcp/src/index.ts", "--verbose"]
