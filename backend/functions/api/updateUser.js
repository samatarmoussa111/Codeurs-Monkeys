const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

// cette fonction updateUser est appelée coté front-end pour mettre à jour les données utilisateur

/**
 * @param body {string, Object}
 * @return {string} message succès ou erreur
 * @forPlay https://us-central1-codeurs-monkeys.cloudfunctions.net/updateUser
 * @documentation https://firebase.google.com/docs/auth/admin/manage-users?hl=fr&authuser=0#node.js
 */
exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;

  return cors(req, res, async () => {
    try {
      // cette fonction updateUser est un outil de firebase qui permet de mettre  à jour les données d'un utilisateur identifié par son uid
      const userRecord = await admin.auth().updateUser(uid, data);
      res.send(userRecord.toJSON());
    } catch (error) {
      return res.status(500).send(error);
    }
  });
});
