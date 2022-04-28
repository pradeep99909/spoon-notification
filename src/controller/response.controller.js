const Response = (data, res) => {
  res.status(200).send(data);
};

module.exports = {
  Response,
};
