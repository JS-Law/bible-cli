# Bible CLI

A simple and interactive Command Line Interface for reading the Bible.

## MVP Features

- Reference a specific verse by book, chapter, and verse.
- Read entire books from the command line.
- Generate a "verse of the day" with a link to a description.
- Interactive UI: Navigate books and chapters using arrow keys.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/JS-Law/bible-cli.git
cd bible-cli
npm install
```

### Usage

- To run the CLI:

  ```sh
  npm start
  ```

- To install globally and use anywhere:

  ```sh
  npm install -g .
  bible-cli
  ```

## Example Commands

- Get a specific verse:

  ```sh
  bible-cli --book John --chapter 3 --verse 16
  ```

- Read an entire book:

  ```sh
  bible-cli --book Genesis
  ```

- Get the verse of the day:

  ```sh
  bible-cli --verse-of-the-day
  ```

- Launch interactive UI:

  ```sh
  bible-cli --ui
  ```

## Roadmap

- [ ] Reference specific verses
- [ ] Read entire books
- [ ] Verse of the day with description
- [ ] Interactive UI navigation

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
