Loader of linkedin-neo4j
========================
The loader reads the data from Linkedin API and stores it in Neo4j database.

Run by:

$ python load.py API_KEY SECRET_KEY OAUTH_USER_TOKEN OAUTH_USER_SECRET

Version
-------
- Python 2.7+
- Py2Neo 2.0
- OAuth2

Setup steps
-----------
For Ubuntu users, if you don't have easy_install:
- wget https://bootstrap.pypa.io/ez_setup.py -O - | sudo python

Install Py2Neo and OAuth2
- $ sudo easy_install py2neo
- $ sudo easy_install oauth2

Documents
---------
- http://py2neo.org/2.0/
- https://github.com/simplegeo/python-oauth2

