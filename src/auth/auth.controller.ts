import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController{
    //accessing the instance of service class
    constructor(private authServ: AuthService){
        //calling the func
        this.authServ.myFunc1();
    }
}