import { api } from "@/api/axios.config";




class AuthRoutes {
  public static AUTH = "/Auth";

  async registerUser(user: IUser) {
    const response = await api.post(`${AuthRoutes.AUTH}/register`, user);
    return response;
  }

  async loginUser(email:string,password:string) {
    const response = await api.post(`${AuthRoutes.AUTH}/login`)
  }
}

export const authRoutes = new AuthRoutes();