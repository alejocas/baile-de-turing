import { Injectable } from '@angular/core';
import { UserDTO } from '../model/userDTO';
import { MockDataService } from '../../common/mockData.service';

@Injectable()
export class LoginService{
    currentUser:string;
    constructor(private mockDataService:MockDataService) { }

    login(userParam:UserDTO):Promise<boolean>{
        var promise= new Promise<boolean>((resolve,reject)=>{
            var user=this.mockDataService.usuarios.find(x=> x.UserName==userParam.UserName && x.Password==userParam.Password)
            if(user){
                this.currentUser=user.UserName;
                resolve(true);
            }
            else{
                resolve(false);
            }
        })
        return promise;
    }
}