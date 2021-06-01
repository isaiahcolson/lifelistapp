# Life List App

### Table of Contents

1. [About the Project](#about-the-project)
   - [Built With](#built-with)
2. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Installed Packages](#installed-packages)
   - [Updating Version](#updating-version)
3. [Linting & Testing](#linting-$-testing)
<!-- 2. [Usage](#usage) -->
4. [Report an Issue](#report-an-issue)
<!-- 4. [License](#license) -->
5. [Created By](#created-by)

## About the Project

Life List is a mobile application where a birder can track their cumulative record of bird species that they have successfully identified.

### Built With

This application is built with a react-native front-end.

- [React Native](https://reactnative.dev/)

## Getting Started
This application was created using React Native, you can follow their [Setting up the development environment](https://reactnative.dev/docs/environment-setup) guide to get started.

> Note: This application was created using `React Native CLI Quickstart`

### Installation

1. Clone this repo

```
git clone git@github.com:isaiahcolson/lifelistapp.git
```

2. Install npm packages

```
npm install
```

3. You will be missing the dotenv file with the `GOOGLE_TOKEN` value, ask the code owner for that value.
4. Start the application

```
# if you have npm
npm start

# if you have yarn
yarn start

# alternate version for either yarn or npm
npx react-native start
```

5. Run your device(s)</br>

```
# run an iOS simulator
npm run ios

# run an android emulator
npm run android
```

> Note: Android Studio must be installed to run and Android emulator and XCode must be installed to run an iOS emulator

### Installed Packages
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [React Native Tab Navigation](https://reactnavigation.org/docs/tab-based-navigation/)
- [React Native Firebase](https://rnfirebase.io/)
- [React Native Google Sign In](https://github.com/react-native-google-signin/google-signin#project-setup-and-initialization)
- [React Native dotenv](https://github.com/goatandsheep/react-native-dotenv)

### Updating Version

Follow the [npm-version standards](https://docs.npmjs.com/cli/v7/commands/npm-version) for a version bump chore.

```
# 1.0.0 -> 1.0.1
npm version patch

# 1.0.0 -> 1.1.0
npm version minor

# 1.0.0 -> 2.0.0
npm version major
```

> Note: All version bumps should be accompanied by a [Github release](https://github.com/isaiahcolson/lifelistapp/releases).

## Linting & Testing

### ESLint

This application uses [ESLint](https://eslint.org/) which is a static code analysis tool for identifying problematic patterns found in JavaScript. Use the following commands to run ESLint on all .js files in root:

```
# if you have yarn
yarn lint
```

### Jest

This application uses [Jest](https://jestjs.io/) which is a testing framework designed to ensure correctness of any JavaScript codebase. Use the following commands to run this project's tests:

```
# if you have npm
npm test

# if you have yarn
yarn test
```

<!-- ## Usage -->
<!-- TODO: as the application gets built out, add workflow here. -->

## Report an Issue
If you have a bug or an idea, browse the [open issues](https://github.com/isaiahcolson/lifelistapp/issues) before opening a new one.

<!-- ## License -->
<!-- TODO: do we need a license? -->

## Created By
- Isaiah Colson - [@isaiahcolson](https://github.com/isaiahcolson)
- [Project Link](https://github.com/isaiahcolson/lifelistapp)
