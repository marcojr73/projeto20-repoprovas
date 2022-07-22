import joi from "joi";

const dataSignInUp = joi.object({
    email: joi.string().email().required().min(5),
    password: joi.string().required().min(10)
});

const dataCreatetest = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    category: joi.string().required(),
    discipline: joi.string().required(),
    teacher: joi.string().required()

})


export {
    dataSignInUp,
    dataCreatetest
}