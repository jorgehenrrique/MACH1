// Criando tipagem de dados por interface
interface Profile {
  type: string;
  credit: number;
  business?: boolean;
}

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  profile: Profile;
}

export default User;
