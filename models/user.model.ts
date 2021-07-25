export default interface UserModel {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  dob: string,
  isBanned: boolean,
  isSuspended: boolean,
  role: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
}
