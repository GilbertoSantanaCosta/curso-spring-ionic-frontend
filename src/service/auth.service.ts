import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { text } from "@angular/core/src/render3/instructions";
import { API_CONFIG } from "../config/api.config";
import { CategoriaDTO } from "../models/categoria.dto";

@Injectable()
export class AuthService{

    constructor(public http : HttpClient){

    }

    autheticate(creds : CategoriaDTO){

        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe : "response",
                responseType : "text"
            });
    }

}