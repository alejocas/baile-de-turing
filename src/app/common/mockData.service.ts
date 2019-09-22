import { UserDTO } from "../login/model/userDTO";
import { Injectable } from '@angular/core';
@Injectable()
export class MockDataService{
    usuarios:UserDTO[]=[
        new UserDTO("juan","juan123"),
        new UserDTO("maria","maria123"),
        new UserDTO("pedro","pedro123")
    ];
}