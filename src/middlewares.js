export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "JAETUBE";
  res.locals.loggedInUser = req.session.user;
  console.log(req.session.user);
  next(); // next를 꼭 호출해야함.
};
