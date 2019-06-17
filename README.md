# Beep Boop

#### _A web site that outputs responses based on an input number - June 14, 2019_

#### _By **Na Hyung Choi**_

## Description

This web site takes a name and a number from a user and returns a range of numbers from 0 to the user input number with the following exceptions:

* Numbers that contain a 1: entire number is replaced with "Beep!"
* Numbers that contain a 2: entire number is replaced with "Boop!"
* Numbers that contain a 3: entire number is replaced with "I'm sorry, INPUTNAME. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception applies unless the second exception does, and the same with the second and third.

The user has the option to make the computer count from zero to or count to zero from the number selected. This web site functions for both positive and negative numbers.

The web site also features a panic button that shows helpful media to the user.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Stores a task as an object and returns name of the task** | "Laundry" | "Laundry = {}" |
| **Clicking on the task marks it as complete (strikethrough)** | "Click 'Laundry'" | "~~Laundry~~" |
| **Clicking a completed task removes it from the list** | Click "~~Laundry~~" |  "  " |
| **Performs above actions for any task that is added** | "Dishes" |  "  " |


## Setup/Installation Requirements

* Clone this repository and open the .html file.
* OR go directly to the [Web page](http://schoinh.github.io/beep-boop)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap

## Support and contact details

_Please contact Na Hyung with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi_**
