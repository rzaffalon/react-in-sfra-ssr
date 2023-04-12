import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import Counter from "../cartridges/app_react/cartridge/client/react/components/Counter";

const PORT = process.env.PORT || 3439;
const app = express();

app.use(express.json());

app.post("/fragment", (req, res) => {
  const props = req.body.props;

  res.send(ReactDOMServer.renderToString(<Counter {...props} />));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
