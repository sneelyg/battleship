const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			inicio_tablero: [
				[1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
			],
			status_tablero: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			],


			inicio_tablero_comp: [
				[0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
			],
			status_tablero_comp: [
				[0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
			],
			registro_disparos: ['0'],

			fire_count: 0,
			fire_count_comp: 0,


			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},



			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},


			fire_torpedo: (pos_x, pos_y) => {
				const store = getStore();

				if (store.inicio_tablero[pos_y][pos_x] == 0) {
					console.log("agua");
					setStore(store.status_tablero[pos_y][pos_x] = 2)
				}

				else if (store.inicio_tablero[pos_y][pos_x] == 1 && store.status_tablero[pos_y][pos_x] == 0) {
					console.log("fuego")
					setStore(store.fire_count += 1);
					console.log(store.fire_count);
					setStore(store.status_tablero[pos_y][pos_x] = 3)
				}

				if (store.fire_count == 18) {
					alert("Has Ganado");
					setStore(store.fire_count = 0);
					window.location.reload();
				}

			},
			fire_comp: (rand_x, rand_y) => {
				const store = getStore();


				if (store.inicio_tablero_comp[rand_y][rand_x] == 0) {
					console.log("agua");
					setStore(store.status_tablero_comp[rand_y][rand_x] = 2)
				}

				else if (store.inicio_tablero_comp[rand_y][rand_x] == 1 && store.status_tablero_comp[rand_y][rand_x] == 1) {
					console.log("fuego")
					setStore(store.fire_count_comp += 1);
					console.log(store.fire_count_comp);
					setStore(store.status_tablero_comp[rand_y][rand_x] = 3)
				}

				if (store.fire_count_comp == 18) {
					alert("Has Perdido");
					window.location.reload();
					setStore(store.fire_count_comp = 0);

				}

			},

			generate_random: () => {
				const store = getStore();
				let aux = '0';
				while (store.registro_disparos.includes(aux)) {
					let rand_x = Math.floor(Math.random() * 10);
					let rand_y = Math.floor(Math.random() * 10);
					aux = rand_x.toString() + rand_y.toString();
				}

				setStore({
					registro_disparos: [...store.registro_disparos, aux]
				});
				console.log(store.registro_disparos);
			},

		}
	};
}

export default getState;
