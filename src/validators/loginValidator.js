const isEmail = (studentEmail) =>
    String(studentEmail)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

const loginValidator = ({ studentEmail, password }) => {
    const errors = {
        studentEmail: "",
        password: "",
    };


    if (!studentEmail) {
        errors.studentEmail = "Email is required";
    } else if (!isEmail(studentEmail)) {
        errors.studentEmail = "Invalid email";
    }

    if (!password) {
        errors.password = "Password is required";
    } 

    return errors;
};

export default loginValidator;