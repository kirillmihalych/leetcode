var amountOfTime = function(root, start) {
    const adjList = buildList(root,[]);
    const visited = [];
    const queue=[start];
    let result = 0;
    
    while(queue.length){
        const len = queue.length;

        for(let i=0;i<len;i++){
            const currNode = queue.shift();
            visited[currNode] = true
            for(let j=0;j<adjList[currNode]?.length;j++){
                if(!visited[adjList[currNode][j]]){
                    queue.push(adjList[currNode][j])
                }
            }
        }
        result++;
    }

    return result-1
};

function buildList(root,adjList){
    if(root===null) return;
    
    if(root.left){
        adjList[root.val] = adjList[root.val] || [];
        adjList[root.val].push(root.left.val)
        adjList[root.left.val] = adjList[root.left.val] || [];      
        adjList[root.left.val].push(root.val);
    }
    
    if(root.right){
        adjList[root.val] = adjList[root.val] || [];
        adjList[root.val].push(root.right.val);
        adjList[root.right.val] = adjList[root.right.val] || [] 
        adjList[root.right.val].push(root.val);
    }
    
    buildList(root.left,adjList);
    buildList(root.right,adjList);
    
    return adjList
}