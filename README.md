

# Dreamon
Dream On: Global is a non-profit 501C3 organization that does missionary and humanitarian work in Central and South America. This repo is used to manage all of the public software. 


## Contributing
This sections serves as a _getting started_ guide for how to contribute to `DreamOn` in different areas. 

### Prerequisites
- *yarn* - The DreamOn workspace utilizes the `yarn` CLI tool. Please make sure that you have the latest stable release of `yarn` installed. For more information, visit the [Yarn Install Docs](https://yarnpkg.com/en/docs/install)


### Folder Structure
Source code for all DreamOn software is organized as followed:

- *app-global* - This is the main website that can be found at *[https://dreamon.world](https://dreamon.world)*
- *app-global-e2e* - This is an e2e cypress application used to types the `app-global` website

### Setup
To ensure the correct project dependencies are installed please run the following command before each new pull request (PR) is submitted.

```bash
yarn
```

### Build
This project was generated using [Nx](https://nx.dev). If you do not already have the `Nx CLI` already installed you can do so by using the following command:

```bash
yarn global add nx
```

You can build the entire workspace by using the following command:

```bash
nx build
```

You can also build an individual application or library using the following command:

```bash
nx build <projectName>
```

### Serving Locally
You can serve the project locally using the following command:

```bash
nx serve
```

### Testing
You can run tests for the entire workspace by using the following command:

```bash
nx test
```

You can also test a specific application or library by adding the `<projectName>`

```bash
nx test <projectName>
```

To run `e2e` tests you can use the following command:

```bash
nx e2e <projectName>
```

### Lint
To check linting errors for the entire project you run the following command:

```bash
nx lint
```

You can also `lint` a specific application or library by adding the `<projectName>`

```bash
nx lint <projectName>
```

### Commit Message Guidelines
We have guidelines around how commit messages should look. This leads to *more readable messages* that are easy to follow when looking through the *project history*. 

#### Format
Each commmit message should consist of a *header*, a *body*, and a *footer*. The header should have a specific format that includes a *type*, a *scope* and a *subject*:

```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### Type
Must be one of the following:
-*build*: Changes that affect the build system or external dependencies
-*ci*: Changes to our CI configuration files and scripts
-*docs*: Documentation only changes
-*feat*: A new feature
-*fix*: A bug fix
-*ref*: A code change that neither fixes a bug nor adds a feature
-*style*: Changes that do not affect the meaning of the code (styling, white-space, formatting, etc)
-*test*: Adding missing tests or correcting existing tests


#### Scope
The scope is optional and should be the name of the application or library affected
-*app-global*
-*app-global-e2e*


#### Subject
The subject contains a succinct descript of the change that should _not_ end in a `period (.)` or should _not_ begin with a capitalized letter


#### Body
The body should include the motivation for the change and constrast this with the previous behavior


#### Footer
The footer should contain a closing reference to an issue. `ie: Closes #1234`


