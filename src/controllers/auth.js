exports.register = (req, res, next) => {
  // dummy response
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  //   console.log(name, email, password);
  const result = {
    message: "Register Success",
    data: {
      uid: 1,
      name: name,
      email: email,
      password: password,
    },
  };
  res.status(201).json(result);
  next();
};
