Journal Prompt 1: What did you accomplish in this phase? Why is using "use strict"; considered a “safety net” for developers?

I created the 1st version of this vault system using a JS function, enabled strict mode, and used an if-else statement to check for the correct key. I used return statements to send back the correct result for the input. I tested it after a lengthy battle with getting the program to run in the terminal. Node.js wasn't installed on my computer, so I had to install it. After installation, Git Bash still couldn't recognize the node command. We had to locate the Node.js installation and update Git Bash's PATH settings so it could find and run Node.

***Using strict mode is considered a "safety net" for developers because it makes JS catch more basic coding errors that would be easy to miss.

Journal Prompt 2: What is the difference between returning a value (like "Access Denied") and throwing an error? Why would a developer prefer throwing a custom error class over a generic Error?

Return simply gives back a value and allows the program to continue running but throw error raises an error and interrupts it running. A developer would prefer throwing a custom error class over a generic one becuase they could more easily find out what went wrong. 

***Please kindly re-check my Journal Prompt 1 response for the 2nd part I missed when submitting at the end of Phase 1. Thank you.

Journal Prompt 3: How does the finally block behave differently than the catch block? Describe a real-world scenario where a finally block would be critical for a program’s stability.

The finally block always runs, with or without the occurence of an error. The catch block handles the errors when they happen. A real-world example would be an error ocurring during checkout in a shopping app where there's a limited quantity of an item-- the finally block would ensure that the temorary reservation is released so that it wouldn't make the inventory on-hand appear to be more limited than it actually is.

Journal Prompt 4: Why is automated testing more reliable than manual testing when verifying that your code “crashes” correctly? What did you learn about the flow of execution when an error is thrown and caught?

Automated tests are more consistent than human ones. Humans make mistakes but automated tests will check everything just as thoroughly every time. When an error is thrown, the program is interrupted so that it can jump to the catch block which handles the error so the program doesn't crash like it would if the error went unhandled.