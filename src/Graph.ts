/**
 * Class representing a node in a graph, which contains the 
 * index (number) of the node and a label for it. Those
 * attributes shouldn't be changed after the node is instantiated.
 */
class GraphNode {
    constructor(_id: number, _label?: string) {
        this.id = _id;
        this.label = _label || '';
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
    constructor({ _numVertices, list }: 
        { _numVertices: number; list?: Map<number, [GraphNode, number][]>; }) {
        this.numVertices = _numVertices;
        this.adjList = list || new Map<number, [GraphNode, number][]>();
    }
    
    public numberVertices(): number {
        return this.numVertices;
    }

    public numberEdges(): number {
        let edges = 0;
        const keys = this.adjList.keys();
        for (let i of keys) {
            edges += this.adjList.get(i)!.length;
        }
        edges /= 2; // because there are edges in both vertices' lists
        return edges;
    }

    public degree(vertex: GraphNode):number {
        return this.adjList.get(vertex.getId())!.length;
    }

    public label(vertex: GraphNode):string {
        return vertex.getLabel();
    }

    public getNeighbors(vertex:GraphNode):[GraphNode, number][] {
        const id = vertex.getId();
        return this.adjList.get(id)!;
    }

    public hasEdge(u:GraphNode, v:GraphNode):boolean {
        const neighborsOfU = this.getNeighbors(u);
        for (let vertex of neighborsOfU) {
            if (vertex[0].getId() === v.getId()) return true;
        }
        return false;
    }

    public weight(u:GraphNode, v:GraphNode):number {
        const neighborsOfU = this.getNeighbors(u);
        for (let vertex of neighborsOfU) {
            if (vertex[0].getId() === v.getId()) {
                return vertex[1];
            }
        }
        return Number.MAX_VALUE;
    }
    private numVertices:number;
    private adjList:Map<number,[GraphNode, number][]>;

}

let listin = new Map<number,[GraphNode, number][]>();
listin.set(1, [[new GraphNode(2,''), 1.0], [new GraphNode(3,''), 1.3 ]]);
listin.set(2, [[new GraphNode(1,''), 1.0]])
listin.set(3, [[new GraphNode(1,''), 1.3]]);

console.log(listin);
let grafao = new Graph({ _numVertices: 3, list: listin });
console.log(grafao.numberEdges());
console.log(grafao.getNeighbors(new GraphNode(1)));
console.log(grafao.degree(new GraphNode(1,'')));
console.log(grafao.hasEdge(new GraphNode(1, ''), new GraphNode(3,'')));
console.log(grafao.hasEdge(new GraphNode(2, ''), new GraphNode(3,'')));
console.log(grafao.weight(new GraphNode(1), new GraphNode(3)));
console.log(grafao.weight(new GraphNode(2), new GraphNode(3)));