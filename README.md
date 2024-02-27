# README Generator

## This project is divided into three parts

1. Intoduction
2. Problem
3. Solution


## Introduction

When creating an open source project on GitHub, it’s important to have a high-quality README for the app.  The Readme should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. To create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

The Readme is created as  a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). 

The application will be invoked by using the following command:


node index.js

https://drive.google.com/file/d/1paPh78okfPTEkvdg3TQJHwKymvJIG0yi/view

[Untitled_ Feb 26, 2024 2_28 PM (3).webm](https://github.com/MeerKar/Readme-Generator/assets/116701851/512487a1-6891-4f9b-b0b9-54d3cf997139)


## Problem

To run inquirer and interact with its prompts took a bit longer than i expected . Then came with the gitignore which accidently created on the wrong path, and finally with the Screencastify where i am introduced for the first time


## Solution
 With the help of the my class videos and npm docs  iwas able to solve the issues i came across. And was able successfully generate a readme file.
 And was able to meet all accepetance criteria.
 such as
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


Credits: John Young (Instructor) and Nick Gambino (TA)
