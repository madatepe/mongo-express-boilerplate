const user = require("../model/userModel")

const userAdd = async (req, res) => {
  try {
    const userAdd = new user(req.body);

    await userAdd.save()
      .then(() => {
        return res.status(201).json(userAdd)
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: "An error occured when save user: " + err
        })
      })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server err"
    })
  }
}

module.exports = {
  userAdd
}