
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export interface IDoctor {
  firstName: string;
  lastName: string;
  lastNameMother: string;
  rut: string;
  specialty: string;
}

export const Doctors = new Mongo.Collection<IDoctor>("doctors");

Meteor.methods({
  insertResults(doctor: IDoctor){
    Doctors.insert(doctor)
  }
})