export class Cliente{
    private _id: number;
    private _nome: string;
    private _sobrenome: string;
    
    public get id() : number {
        return this._id;
    }
    
    public set id(id : number) {
        this._id = id;
    }
    
    public get nome() : string {
        return this._nome;
    }

    public set nome(nome : string) {
        this._nome = nome;
    }
    
    public get sobrenome() : string {
        return this._sobrenome;
    }
    
    public set sobrenome(sobrenome : string) {
        this._sobrenome = sobrenome;
    }
}