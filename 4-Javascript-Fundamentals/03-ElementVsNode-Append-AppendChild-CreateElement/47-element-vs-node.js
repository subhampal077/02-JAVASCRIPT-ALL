

// What is the Difference Between Element and Node?

// in a html file there are something present without elements that is called node.

// Every element is a node but every node is not a element. (example = text node)

//  document.body.childNodes[2].nodeValue = "updated value";


const selectTextNode = document.body.childNodes[2];   // select text node


// updating the node text value

selectTextNode.nodeValue = "Node text updated successfully";

console.log(selectTextNode);   // Node text updated successfully


// ended //