# HTTPal

A lightweight and easy-to-use command-line HTTP client for making requests and inspecting responses.

## Features

*   **Simple and intuitive:** Makes it easy to send HTTP requests from the command line.
*   **Supports JSON and plain text:** Automatically detects and parses JSON responses.
*   **Handles errors gracefully:** Provides clear error messages for failed requests.

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/codingashishdev/httpal.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Build the project:

    ```bash
    npm run build
    ```

## Usage

To make a request, simply run the following command:

```bash
npm start -- <url>
```

For example:

```bash
npm start -- https://api.github.com/users/google
```

## Roadmap

*   Add support for different HTTP methods (POST, PUT, DELETE, etc.).
*   Allow users to specify headers and request bodies.
*   Add a verbose mode to display detailed request and response information.
*   Implement a testing suite to ensure the reliability of the tool.