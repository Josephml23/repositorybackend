const mainController = {
  home: (req, res) => res.render("home", { title: "Inicio" }),
  about: (req, res) => res.render("about", { title: "Acerca de" }),
  contact: (req, res) => res.render("contact", { title: "Contacto" }),
  services: (req, res) => res.render("services", { title: "Servicios" }),
  postContact: (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log("Nuevo mensaje de contacto:");
    console.log({ nombre, email, mensaje });
    res.render("contact", {
      title: "Contacto",
      enviado: true
    });
  }
};

module.exports = mainController;
