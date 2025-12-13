function status(request, response) {
  response.status(200).json({ chave: "Aqui ta On!!!" });
}

export default status;
