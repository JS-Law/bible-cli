# Bible CLI Project Todo List

## 1. Initialize NPM project
- Run `npm init -y` to quickly scaffold package.json.
- Set project name, description, author, and license fields.
- Add `.gitignore` for node_modules and other artifacts.

## 2. Set up CLI entry point
- Create `cli.js` in the project root.
- Add a shebang (`#!/usr/bin/env node`) for direct execution.
- Configure `bin` field in package.json to point to `cli.js`.
- Parse command-line arguments (use `process.argv` or a library like `yargs`).

## 3. Find Bible verse API
- Search for public APIs (e.g., https://labs.bible.org/api/?passage=random).
- Test API endpoints with curl or Postman.
- Note authentication requirements, rate limits, and response format.

## 4. Implement API call logic
- Use `node-fetch` or `axios` to make HTTP requests.
- Parse the API response and extract verse text and reference.
- Format output for terminal readability.

## 5. Add error handling
- Handle network errors, invalid responses, and API downtime.
- Display user-friendly error messages.
- Add retries or fallback logic if desired.

## 6. Document usage in README.md
- Write installation steps (`npm install` or global install).
- Provide example CLI usage and expected output.
- Document available options/flags if any.

## 7. Publish to NPM (optional)
- Update package.json with repository and keywords.
- Test CLI install globally (`npm install -g .`).
- Run `npm publish` (after login and version bump).

---

Update this todo list as you progress or add new features. Each step is broken down for sequential execution and clarity.
