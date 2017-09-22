const car_model = [
	{ table_name: 'car_model', model: "AMAROK", manufacturer_id: 1},
	{ table_name: 'car_model', model: "POLO", manufacturer_id: 1},
	{ table_name: 'car_model', model: "TUEREG", manufacturer_id: 1},
	{ table_name: 'car_model', model: "PASSAT", manufacturer_id: 1},
	{ table_name: 'car_model', model: "SOPER B", manufacturer_id: 1},

	{ table_name: 'car_model', model: "Terrain", manufacturer_id: 2},
	{ table_name: 'car_model', model: "Canyon", manufacturer_id: 2},
	{ table_name: 'car_model', model: "Yukon", manufacturer_id: 2},
	{ table_name: 'car_model', model: "Sierra", manufacturer_id: 2},
	{ table_name: 'car_model', model: "Savana", manufacturer_id: 2},
	
	{ table_name: 'car_model', model: "Camry", manufacturer_id: 3},
	{ table_name: 'car_model', model: "Corolla", manufacturer_id: 3},
	{ table_name: 'car_model', model: "Yaris", manufacturer_id: 3},
	{ table_name: 'car_model', model: "Auris Hybrid", manufacturer_id: 3},
	{ table_name: 'car_model', model: "Venza", manufacturer_id: 3},

	{ table_name: 'car_model', model: "Focus", manufacturer_id: 4},
	{ table_name: 'car_model', model: "Fiesta", manufacturer_id: 4},
	{ table_name: 'car_model', model: "Mondeo", manufacturer_id: 4},
	{ table_name: 'car_model', model: "EcoSport", manufacturer_id: 4},
	{ table_name: 'car_model', model: "Tourneo", manufacturer_id: 4},

	{ table_name: 'car_model', model: "Roadster", manufacturer_id: 5},
	{ table_name: 'car_model', model: "Almera", manufacturer_id: 5},
	{ table_name: 'car_model', model: "Altima", manufacturer_id: 5},
	{ table_name: 'car_model', model: "Cube", manufacturer_id: 5},
	{ table_name: 'car_model', model: "Juke", manufacturer_id: 5},

	{ table_name: 'car_model', model: "Accord", manufacturer_id: 6},
	{ table_name: 'car_model', model: "Civic", manufacturer_id: 6},
	{ table_name: 'car_model', model: "CR-V", manufacturer_id: 6},
	{ table_name: 'car_model', model: "Pilot", manufacturer_id: 6},
	{ table_name: 'car_model', model: "Spike", manufacturer_id: 6},

	{ table_name: 'car_model', model: "Avante", manufacturer_id: 7},
	{ table_name: 'car_model', model: "Accent", manufacturer_id: 7},
	{ table_name: 'car_model', model: "Сolaris", manufacturer_id: 7},
	{ table_name: 'car_model', model: "Sonata", manufacturer_id: 7},
	{ table_name: 'car_model', model: "Tucson", manufacturer_id: 7},

	{ table_name: 'car_model', model: "Punto", manufacturer_id: 8},
	{ table_name: 'car_model', model: "Bravo/Brava", manufacturer_id: 8},
	{ table_name: 'car_model', model: "Romeo 156", manufacturer_id: 8},
	{ table_name: 'car_model', model: "Panda", manufacturer_id: 8},
	{ table_name: 'car_model', model: "Tipo", manufacturer_id: 8},

	{ table_name: 'car_model', model: "DH27", manufacturer_id: 9},
	{ table_name: 'car_model', model: "Limousine", manufacturer_id: 9},
	{ table_name: 'car_model', model: "V8", manufacturer_id: 9},
	{ table_name: 'car_model', model: "Super", manufacturer_id: 9},
	{ table_name: 'car_model', model: "Super Eight", manufacturer_id: 9},

	{ table_name: 'car_model', model: "X1", manufacturer_id: 10},
	{ table_name: 'car_model', model: "X2", manufacturer_id: 10},
	{ table_name: 'car_model', model: "X3", manufacturer_id: 10},
	{ table_name: 'car_model', model: "X4", manufacturer_id: 10},
	{ table_name: 'car_model', model: "X5", manufacturer_id: 10}

];


const users = [
{table_name: 'users', name: 'Andrey', pass: 'kod1'},
{table_name: 'users', name: 'Anna', pass: 'kod2'},
{table_name: 'users', name: 'Alexey', pass: 'kod3'},
{table_name: 'users', name: 'Irina', pass: 'kod4'},
{table_name: 'users', name: 'Nikolay', pass: 'kod5'},
{table_name: 'users', name: 'Marina', pass: 'kod6'},
{table_name: 'users', name: 'Anatoly', pass: 'kod7'},
{table_name: 'users', name: 'Ulia', pass: 'kod8'},
{table_name: 'users', name: 'Oleg', pass: 'kod9'},
{table_name: 'users', name: 'Alina', pass: 'kod10'},
{table_name: 'users', name: 'Vitaly', pass: 'kod11'},
{table_name: 'users', name: 'Elena', pass: 'kod12'},
{table_name: 'users', name: 'Ruslan', pass: 'kod13'},
{table_name: 'users', name: 'Galina', pass: 'kod14'},
{table_name: 'users', name: 'Alexandr', pass: 'kod15'}];


const car_manufacturer = [
{table_name: 'car_manufacturer', manufacturer: 'Volkswagen'},
{table_name: 'car_manufacturer', manufacturer: 'General Motors'},
{table_name: 'car_manufacturer', manufacturer: 'Toyota'},
{table_name: 'car_manufacturer', manufacturer: 'Ford'},
{table_name: 'car_manufacturer', manufacturer: 'Nissan'},
{table_name: 'car_manufacturer', manufacturer: 'Honda Motors'},
{table_name: 'car_manufacturer', manufacturer: 'Hyundai'},
{table_name: 'car_manufacturer', manufacturer: 'Fiat Chrysler'},
{table_name: 'car_manufacturer', manufacturer: 'Daimler'},
{table_name: 'car_manufacturer', manufacturer: 'BMW'}];

const owner_to_car = [
	{table_name: 'owner_to_car', car_id: '4', owner_id:'1'},
	{table_name: 'owner_to_car', car_id: '31', owner_id:'4'},
	{table_name: 'owner_to_car', car_id: '13', owner_id:'6'},
	{table_name: 'owner_to_car', car_id: '10', owner_id:'2'},
	{table_name: 'owner_to_car', car_id: '20', owner_id:'8'},
	{table_name: 'owner_to_car', car_id: '13', owner_id:'9'},
	{table_name: 'owner_to_car', car_id: '7', owner_id:'10'}
]

///////////////////////////
////   Create Tables   ////
///////////////////////////
const addTables = () => {
	const url = 'http://localhost:3001/addtables';
	fetch(url, {
	  method: "POST",
	  header: { 'Content-Type': 'application/json' }
	});
}

////////////////////////////
//Add Car Models in mySQL///
////////////////////////////
const addCar = () => {
	const url = 'http://localhost:3001/adddata';
	fetch(url, {
	  method: "POST",
	  header: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(car_model)
	});
}
///////////////////////////

///////////////////////////////////
//Add Car Manufacturers in mySQL///
///////////////////////////////////
const addManufacture = () => {
	const url = 'http://localhost:3001/adddata';
	fetch(url, {
	  method: "POST",
	  header: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(car_manufacturer)
	});
}
///////////////////////

///////////////////////
//Add Users in mySQL///
///////////////////////
const addUsers = () => {
	const url = 'http://localhost:3001/adddata';
	fetch(url, {
	  method: "POST",
	  header: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(users)
	});
}
///////////////////////////

///////////////////////////
//Add owner to car mySQL///
///////////////////////////
const ownerToCar = () => {
	const url = 'http://localhost:3001/adddata';
	fetch(url, {
	  method: "POST",
	  header: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(owner_to_car)
	});
}
///////////////////////////





const btn = document.createElement('button');
document.querySelector('.content').appendChild(btn);
btn.textContent = "!!!!!!!!!!ADD TABLES IN EMTY mySQL!!!!!!!";
btn.addEventListener('click', () => {addTables()});


const btn1 = document.createElement('button');
document.querySelector('.content').appendChild(btn1);
btn1.textContent = "ADD START DATA IN EMPTY mySQL";
btn1.addEventListener('click', () => {	
	addUsers();
	addManufacture();
	addCar();
	ownerToCar();})