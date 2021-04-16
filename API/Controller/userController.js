import userModel from '../Model/userModel'; 
import { model } from 'mongoose'; 
const UserModel = model('UserModel', userModel); // Création du modèle à partir du schéma

function respond(err, result, res) { // Fonction utilisée tout au long du contrôleur pour répondre aux requetes
  if (err) {
    return res.status(500).json({error: err});
  }
  return res.json(result);
}

const userModelController = {
  getAll: (req, res) => {  // Récupérer tous les utilisateurs
    UserModel.find({}, (err, UserModels) => {
      return respond(err, UserModels, res);
    });
  },
  create: (req, res) => { // Créer un utilisateur
    const newUserModel = new UserModel(req.body);
    newUserModel.save((err, savedUserModel) => {
      return respond(err, savedUserModel, res);
    });
  },
  get: (req, res) => { // Récupérer un utilisateur
    UserModel.findById(req.params.id, (err, UserModel) => {
      return respond(err, UserModel, res);
    });
  },
  update: (req, res) => { // Mettre à jour un utilisateur
    UserModel.findByIdAndUpdate(req.params.id, req.body, (err, UserModel) => {
      return respond(err, UserModel, res);
    });
  },
  delete: (req, res) => { // Supprimer un utilisateur
    UserModel.findByIdAndRemove(req.params.id, (err, UserModel) => {
      return respond(err, UserModel, res);
    });
  }
};

export default userModelController; // Export du contrôleur