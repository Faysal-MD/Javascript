// Error = An object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try {} = encloses code that might potentially cause an error
// catch{} = catch and handle any thrown errors from try{}
// finally{} = (optional) always executes. Used mostly for cleanup
//             ex. close files, close connections, release resources

try {
  console.log(X);
  // NETWORK ERRORS
  // PROMISE REJECTION
  // SECURITY ERRORS
} catch (error) {
  console.error(error);
} finally {
  // CLOSE FILES
  // CLOSE CONNECTIONS
  // RELEASE RESOURCES
  console.log("This always executes");
}

console.log("You've reached the ends");
