/*
Phase 1: The Vault Foundation
Establish the basic structure of the vault and ensure the environment is strict.

Requirements
Enable "use strict"; at the top of your file to catch common mistakes early.
Create a function accessVault(key) that simply returns "Access Granted" if the key is the string "SECRET_123", and returns "Access Denied" for anything else.
In your main code, call this function a few times with different values and console.log() the results.

Hints
Remember that "use strict"; must be the very first line of your script.
Use a simple if/else statement to check the key.
*/

/*
Phase 2: The Security Layer
Instead of returning a simple string for failure, the vault should now “throw” specific errors that describe exactly what went wrong.

Requirements
Create a custom error class InvalidKeyError that extends the built-in Error class.
Create a custom error class VaultLockedError that extends the built-in Error class.
Update accessVault(key) to throw these errors:
If the key is undefined or NaN, throw an InvalidKeyError with the message "Key is missing or corrupted".
If the key is provided but is incorrect, throw a VaultLockedError with the message "Incorrect key provided".
If the key is "SECRET_123", return "Access Granted".

Hints
To create a custom error: class InvalidKeyError extends Error {}.
Use the throw new ErrorName("message") syntax to trigger the exception.
*/

/*
Phase 3: The Safety Protocol
Now you must implement a way to handle these crashes so the entire program doesn’t stop running.

Requirements
Create a “Master Access” function called attemptEntry(key).
Inside this function, wrap the call to accessVault(key) in a try...catch...finally block:
Try: Attempt to call accessVault.
Catch: Use instanceof to check the error type. If it’s an InvalidKeyError, log "Security Alert: System corruption detected.". If it’s a VaultLockedError, log "User Error: Please try again.". If it’s any other error, re-throw it.
Finally: Log "Vault attempt completed." regardless of whether the access succeeded or failed.
Replace your test calls to use attemptEntry instead of accessVault directly.

Hints
The finally block is the perfect place for “cleanup” or logging that must happen every single time.
Remember to use if (e instanceof InvalidKeyError) inside your catch block.
*/

/*
Phase 4: The Audit Suite
Finally, verify that your vault crashes and recovers at the exact points you intended using automated tests.

Requirements
Create one or more test functions that automatically verify your vault’s behavior. Your tests should be able to report whether they passed or failed.
Ensure your tests cover these three scenarios:
A correct key returns "Access Granted".
An undefined or NaN key causes an InvalidKeyError to be thrown.
A wrong key causes a VaultLockedError to be thrown.

Hints
To test if a function throws a specific error, you can wrap the call in a try/catch block and return true if the caught error is an instanceof the expected error class.
Example pattern: try { accessVault(null); return false; } catch(e) { return e instanceof InvalidKeyError; }
*/

"use strict";

class InvalidKeyError extends Error {



}

class VaultLockedError extends Error {



}

function accessVault(key) {

    if (key === undefined || Number.isNaN(key)) {

        throw new InvalidKeyError("Key is missing or corrupted");

    }

    if (key === "SECRET_123") {

        return "Access Granted";

    } else {

        throw new VaultLockedError("Incorrect key provided");


    }

}

function attemptEntry(key) {

    try {

        console.log(accessVault(key));

    } catch (e) {

        if (e instanceof InvalidKeyError) {

            console.log("Security Alert: System corruption detected.");

        }
        
        else if (e instanceof VaultLockedError) {

            console.log("User Error: Please try again.");

        }

        else {

            throw e;

        }

    }

    finally {

        console.log("Vault attempt completed.");

    }

}

attemptEntry("SECRET_123");

attemptEntry("password");

attemptEntry("");

function testCorrectKey() {

    if (accessVault("SECRET_123") === "Access Granted") {

        console.log("Correct key test: PASSED");

    } else {

        console.log("Correct key test: FAILED");
    }

}

testCorrectKey();

function testInvalidKey() {

    try {

        accessVault(undefined);

    } catch (e) {

        if (e instanceof InvalidKeyError) {

            console.log("Invalid key test: PASSED");

        } else {

            console.log("Invalid key test: FAILED");

        }

    }

    try {

        accessVault(NaN);

    } catch (e) {

        if (e instanceof InvalidKeyError) {

            console.log("NaN test: PASSED");

        } else {

            console.log("NaN test: FAILED");

        }

    }

}

testInvalidKey();

function testWrongKey() {

    try {

        accessVault("password");

    } catch (e) {

        if (e instanceof VaultLockedError) {

            console.log("Wrong key test: PASSED");

        } else {

            console.log("Wrong key test: FAILED");

        }

    }

}

testWrongKey();