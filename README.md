# Gemini Docs MCP Server

[![smithery badge](https://smithery.ai/badge/@M-Gonzalo/cosa-sai)](https://smithery.ai/server/@M-Gonzalo/cosa-sai)

## Description

This project implements an MCP server that enables access to documentation for various technologies using the Gemini API with its gigantic context window of 2M tokens. It should work for any client, but is targeted especially to the Roo/Cline environment.

This approach offers several advantages over simply browsing the web or using a search engine:

*   **Access to a curated knowledge base:** The LLM uses a specific set of documentation, avoiding junk results and false positives that can confuse the model.
*   **Overcomes context window limitations:** By providing the documentation directly, the LLM can access more information than would be possible with web search alone.
*   **Tailored and well-thought-out responses:** The LLM doesn't just provide snippets from the documentation, but crafts well-reasoned answers that take into consideration the entire specification for the technology in question. This allows for more complex questions like "what alternative ways of doing X are there?" or "is this snippet idiomatic?".

It also overcomes some problemmatic hurdles of traditional RAG systems:

*   **No need for chunking:** The LLM can access the entire documentation in one go, without needing to chunk it into smaller pieces, and having to painfully test and choose between all the possible ways of doing so.
*   **No need for a retriever:** The Gemini API itself serves as a powerful retriever that can access the entire documentation, so there's no need to implement a custom one.
*   **No vectorization, vector DBs, or other complex systems:** We work directly with plain text, and since we can see everything at once, we don't need vectors for similarity search. If it's relevant, we know about it.

There are some limitations, though:

*   **No real-time updates:** The documentation is static and won't be updated in real time. This means that the LLM might not know about the latest features or changes in the technology unless we manually update the documentation or provide an automated way of doing so.
*   **A lot of tokens is not the same as an infinite context window:** The LLM can only see about 2 million tokens at a time, so it might not be able to see the entire documentation for some technologies. This is especially true for large and complex stacks with copious amounts of documentation.
*   **It's not that fast:** We're using Gemini 1.5 Pro (not Flash), and we're loading it with a whole bunch of documentation, so it might take a while to get a response. This is especially true for the first query, as the server needs to upload the documentation to the API.

## Features

*   Enables clients to take an "ask your docs" approach to learning and debugging for an arbitrary number of technologies, including some obscure or lesser-known ones.
*   Uses the Gemini API to answer questions about the documentation.
*   Supports multiple tools for querying the documentation:
    *   `can_x_be_done`: Check if a specific task can be done in a given technology.
    *   `hints_for_problem`: Get hints for solving a specific problem.
    *   `is_this_good_practice`: Check if a code snippet follows good practices.
    *   `how_to_do_x`: Get examples and alternative approaches for a specific task.
*   Provides a logging system for debugging (enabled with the `--verbose` flag).

## Getting Started

### Installing via Smithery

To install Gemini Docs Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@M-Gonzalo/cosa-sai):

```bash
npx -y @smithery/cli install @M-Gonzalo/cosa-sai --client claude
```

This MCP server is automatically started and managed by the client. To enable it, you need to configure it in your settings file (for example, `~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json`). There's usually a button for opening up the settings file in the client.

Here's the configuration for this server:

```json
{
  "command": "bun",
  "args": [
    "--watch",
    "path/to/repo/cosa-sai-mcp/src/index.ts",
    "--verbose"
  ],
  "env": {
    "GEMINI_API_KEY": "<your_gemini_api_key>"
  },
  "disabled": false,
  "alwaysAllow": [
    "can_x_be_done",
    "hints_for_problem",
    "is_this_good_practice",
    "how_to_do_x"
  ],
  "timeout": 60 // in seconds
}
```

## Procuring and Sanitizing the Knowledge Base

This MCP server requires a knowledge base of documentation to answer questions. You must manually procure this knowledge base, either by downloading a public repository, scraping a website, or using other methods.

An optional sanitation process can be performed to clean up the original documentation from styling and other unnecessary content.

Here are some basic tools for doing so. Better solutions are encouraged:

**Naive Scrapper:**

```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --directory-prefix=./local_copy --no-verbose --show-progress $1
```

**Quick and Dirty Conversor to Markdown-ish:**

```bash
#!/bin/bash

directory="${1:-.}"  # Default to current directory if no argument is provided
output_file="${2:-concatenated.md}"  # Default output file name

echo "Concatenating files in '$directory' into '$output_file'..."

# Clear output file if it exists
truncate -s 0 "$output_file"

# Find all files (excluding directories) and process them
find "$directory" -type f -name '*.html' | while IFS= read -r file; do
    echo "=== ${file#./} ===" >> "$output_file"
    cat "$file" \
    | grep -v 'base64' \
    | html2markdown >> "$output_file"
    echo -e "\n" >> "$output_file"
done

echo "Done! Output saved to '$output_file'"
```

## Usage

This server provides the following tools:

*   **can\_x\_be\_done:** Checks if a specific task can be done in a given technology.
    *   **Input:** `docs`, `prompt`, `x`, `technology`
    *   **Output:** `success`, `data`
*   **hints\_for\_problem:** Gets hints for solving a specific problem.
    *   **Input:** `docs`, `prompt`, `problem`, `context`, `environment`
    *   **Output:** `success`, `data`
*   **is\_this\_good\_practice:** Checks if a code snippet follows good practices.
    *   **Input:** `docs`, `prompt`, `snippet`, `context`
    *   **Output:** `success`, `data`
*   **how\_to\_do\_x:** Gets examples and alternative approaches for a specific task.
    *   **Input:** `docs`, `prompt`, `x`, `technology`
    *   **Output:** `success`, `data`

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Submit a pull request.

## License

This project is licensed under the MIT License.

## Disclaimer

This is a very early version of the project, and it's likely to have bugs and limitations. Please report any issues you find, and feel free to suggest improvements or new features.