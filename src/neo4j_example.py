from neo4j import GraphDatabase

# Setup credentials and driver
URI = "neo4j://localhost:7687"
USERNAME = "neo4j"
PASSWORD = "myStrongPassword123"  # Replace with your password

driver = GraphDatabase.driver(URI, auth=(USERNAME, PASSWORD))

# Cypher query with parameter

# Named parameter

# Run query using execute_query
records, summary, keys = driver.execute_query("""
MATCH path = (person:Person)-[actedIn:ACTED_IN]->(movie:Movie)
RETURN path, person, actedIn, movie
""")

for record in records:
    node = record["movie"]

print(node.element_id)      # (1)
print(node.labels)          # (2)
print(node.items())         # (3)

# (4)
print(node["name"])
print(node.get("name", "N/A"))

acted_in = record["actedIn"]

print(acted_in.id)         # (1)
print(acted_in.type)       # (2)
print(acted_in.items())    # (3)

# 4
print(acted_in["roles"])
print(acted_in.get("roles", "(Unknown)"))

print(acted_in.start_node) # (5)
print(acted_in.end_node) 

path = record["path"]

print(path.start_node)  # (1)
print(path.end_node)    # (2)
print(len(path))  # (1)
print(path.relationships)  
# Close the driver
driver.close()
