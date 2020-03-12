/**
 * Class representing a node in a graph, which contains the 
 * index (number) of the node and a label for it. Those
 * attributes shouldn't be changed after the node is instantiated.
 */
class GraphNode {
    constructor(_id: number, _label: string) {
        this.id = _id;
        this.label = _label;
    }
    public getId():number {
        return this.id;
    }

    public getLabel():string {
        return this.label;
    }
    private id: number;
    private label: string;
}

/**
 * Class representing an undirected and weighted graph G(V,E,w)
 * Where V is the set of vertices
 * E is the set of edges
 * w is the weight function  
 */ 
class Graph {
    constructor(_numVertices:number, list?:Map<number,GraphNode[]>) {
        this.numVertices = _numVertices;
        this.adjList = list || new Map<number, GraphNode[]>();
    }
    
    public numberVertices():number {
        return this.numVertices;
    }

    public numberEdges():number {
        let edges = 0;
        const keys = this.adjList.keys();
        for (let i of keys) {
            let list = this.adjList.get(i);
            if (list) {
                edges += list.length;
            }
            
        }
        edges /= 2; // because there are edges in both vertices' lists
        return edges;
    }

    private numVertices:number;
    private adjList:Map<number,GraphNode[]>;

}

let listin = new Map<number,GraphNode[]>();
listin.set(1, [new GraphNode(2,''), new GraphNode(3,'') ]);
listin.set(2, [new GraphNode(1,'')])
listin.set(3, [new GraphNode(3,'')]);

console.log(listin);
let grafao = new Graph(3, listin);
console.log(grafao.numberEdges());