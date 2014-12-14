linkedin-neo4j
==============
This project is an example showing how to:
- Load a linkedin network into neo4j using the linkedin developer API. You can easily run this multiple times with different users to build an aggregate network.
- Serve the network via node.js
- Display the network using sigma.js

Support:
- Py2neo v2.0
- Neo4j database v2.1.6
- Node.js v1.10.x
- Sigma.js v1.0.3

Assumptions:
- You have followed the instructions to obtain the linkedin developer credentials as described here: https://developer.linkedin.com/documents/authentication 

Coming Soon (Maybe?)
- Ability to automatically run community detection (modularity) using Gephi Toolkit. If anyone knows of other ways to do this please let rjbriody know. Message rjbriody or feel free to post suggestions on the issue forum or rjbriody's blog: www.bobbriody.com.

Directories:
server: contains node.js server that can serve the network from neo4j to the client webpage
client: webpage that uses sigma.js to display the network
load: script that loads neo4j using the linkedin developer api
