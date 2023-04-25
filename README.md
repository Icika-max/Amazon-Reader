# Phase-5 Final Project
# Amazon-Reader

# Description

- This is a rails and react.js application for an online ookstore that servers both as a library and a store.

# Getting  Started

- In order to use this repo you need to have the following installed:

- OS [either: Windows 10+, Linux or MacOS

- Ruby - 3.1.+

# Installation

- To use this repo on your machine requires some simple steps

#### Alternative One

- Open a terminal / command line interface on your computer

- Clone the repo by using the following:

        -  git@github.com:Icika-max/Amazon-Reader.git

- Change directory to the repo folder:

        - cd Amazon-Reader.git

- Open it in Visual Studio Code

        - code .

(Alternate Option) Open it in any editor of your choice.

# Alternative Two

- On the top right corner of this page there is a button labelled Fork.

- Click on that button to fork the repo to your own account.

- Take on the process in Alternative One above.

- Remember to replace your username when cloning.

        - git@github.com:Icika-max/Amazon-Reader.git

# Project SetUp

- Run and install our dependency gems in the Gemfile in the terminal:

```bash
bundle install
```

- Run the migrations:

```bash
rails db:migrate
```

- Seed the database data:

```bash
rails db:seed
```

- Run the server:

```bash
rails s
```

## React Set-up

- To set up the React frontend, install the dependencies:

```bash
npm install --prefix client
```

- Run the server:

```bash
npm start --prefix client
