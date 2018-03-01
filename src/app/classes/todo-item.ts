export class TodoItem {
    private name: string;
    private description: string;
    private id: number;

    constructor(id: number, name: string, description: string){
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public getId(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getDescription(): string{
        return this.description;
    }
}
