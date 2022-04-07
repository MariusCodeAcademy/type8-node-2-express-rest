# type8-node-2-express-rest

## steps

1. git init
2. npm init -y
3. index.js
4. create express app
5. add script "start": "node src/index.js"

## Terms

1. REST - restful state transfer. Standartas kaip aplikacijos bendrauja tarpusavyje.
2. API - application programing interface.
3. Resource - informacijos vienetas, grupe. pvz posts, comments, book,
4. Request - siunciama uzklausa is kliento Node(BE). gali tureti parametrus ir body.
5. Response - musu atsakymas i request'a. Pranesti apie klaida, nustatyti http koda
6. PORT - http addreso dalis, leidzia atskirti paleistas aplikacijas. 3000 3001 3002 3003, 5000, 5050, 5005, 8000, 8008

## uzklausa

GET https://jsonplaceholder.typicode.com/api/users/

- GET - http metodas
- host - https://jsonplaceholder.typicode.com/
- /api/users/ - endpoint
- users - resursas
