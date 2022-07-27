# Arm_motion_control


This repository contains two tasks:
1- Programming a web page to control the arm.
2- Write the Arduino code for the control.


In this task there are several files:

-The first file ( task2.html ) :
contains the HTML code, to create a web page with buttons and a text box

-The second file ( task2.css ) :
contains the CSS code , associated with the first file for the  color and theme design 

-The third file ( javascript.js ) :
contains the Javascript code , to convert the audible text to the typed text with use web serial API on the web page to guide the robot , associated with the first file

-The fourth file ( arduino.js ) :
contains the Javascript code, connect the Arduino ide with the web page by using the web serial API, filter on devices with the arduino USB vendor ID and request an Arduino from the user, associated with the first file

-The last file ( arm_control.ino ) :
contains the Arduino code, that controls the movement of the robot to the top , bottom , right and left
