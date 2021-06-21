class Vertex {
    private _name: string;
    public get name(): string {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
  
    }

    private _edges: string[];

    public get edges(): string[] {
        return this._edges;
    }

    public set edges(v: string[]) {
        this._edges = v;
    }


    constructor(vName: string) {
        this._name = vName;
        this._edges = [];
    }
}

class Graph {
    private _adjList: Vertex[];

    constructor() {
        this._adjList = [];
    }
}