import joi from "joi";

const dataSignInUp = joi.object({
    email: joi.string().email().required().min(5),
    password: joi.string().required().min(10)
});


export {
    dataSignInUp,
}