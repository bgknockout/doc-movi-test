import { Mongo } from "meteor/mongo";

interface IFormDoctor {
  _id: string
  firstName: string;
  lastName: string;
  lastNameMother: string;
  rut: string;
  specialty: string;
  createdAt: Date
}

const DoctorCollection = new Mongo.Collection<IFormDoctor>("doctors");

export default DoctorCollection;
