const isEmail = (studentEmail) =>
    String(studentEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  
  const signupValidator = ({ studentName, studentEmail, password, phoneNumber }) => {
    const errors = {
        studentName: "",
        studentEmail: "",
        password: "",
        phoneNumber: "",
      };
  
    if (!studentName) {
      errors.studentName = "Name is required";
    }
  
    if (!studentEmail) {
      errors.studentEmail = "Email is required";
    } else if (!isEmail(studentEmail)) {
      errors.studentEmail = "Invalid email";
    }
  
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password is 6 char long";
    }
  
    if (!phoneNumber) {
      errors.phoneNumber = "phone number is required";
    }
  
    return errors;
  };
  
  export default signupValidator;