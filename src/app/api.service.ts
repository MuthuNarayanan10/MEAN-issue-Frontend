import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string;
baseUrl:string = "http://localhost:3000";
public loggedusername : string;

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }

public userlogin(email, password) {
// alert(email)
return this.httpClient.post<any>(this.baseUrl + '/api/getuser', { email, password })
        .pipe(map(User => {
                    this.loggedusername = User[0].name;
                    console.log(User[0].email);
                    this.setToken(User[0].email);
                    this.getLoggedInName.emit(true);
                    return User;
        }));
}
public emails : Array<string>;
public getuserslist(){
    return this.httpClient.get<any>(this.baseUrl + '/api/getemails');
}


public userregistration(name,email,password) {
    return this.httpClient.post<any>(this.baseUrl + '/api/adduser', {name,email,password});
// return this.httpClient.post<any>(this.baseUrl + '/api/adduser', {name,email,password})
//     .pipe(map(res=>res.json()));
}

public addissue(title,description,reportdate,status,assignee){
    var reporter : string = this.getToken();
   var  comments : string = "";
   alert("ISSUE SUCCESSFULLY SAVED!!");
    return this.httpClient.post<any>(this.baseUrl + '/api/addissue',{title,description,reportdate,reporter,status,assignee,comments}); 
}

public updateissue(_id,title,description,reportdate,reporter,status,comments)
{
    var assignee :string = this.getToken();
    return this.httpClient.post<any>(this.baseUrl + '/api/updateissue/'+_id,{title,description,reportdate,reporter,status,assignee,comments}); 
    }

public getissueassigned(){
    var email : string = this.getToken();
    // alert(email);
    return this.httpClient.post<any>(this.baseUrl+'/api/getassigned',{email});
}

public getissue(id){
        return this.httpClient.post<any>(this.baseUrl+'/api/getissue',{id});
}



public getissuelist(){
    return this.httpClient.get<any>(this.baseUrl + '/api/issuelist');
}
//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}