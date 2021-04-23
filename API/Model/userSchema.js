import { Schema as _Schema } from 'mongoose'; // Import de la librairie mongoose
const Schema = _Schema;

// Définition du schéma
const userSchema = new Schema(
  {
    title: {type: String, required: true},
    user: {type: String, required: false},
  }, 
  {timestamps: true} // Pour avoir les dates de création et de modification automatiquement gérés par mongoose
);

export default userSchema; // Export du schéma