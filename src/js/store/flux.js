const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],

			favoritos: [],

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

			getCharacters: () => {

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://rickandmortyapi.com/api/character/", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ characters: result.results }))
					.catch(error => console.log('error', error));
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
			setFavoritos: (id) => {
				const store = getStore();
				var not_there = true;
				console.log(not_there);
				for (let j = 0; j < store.favoritos.length; j++) {
					if(id == store.favoritos[j].id) not_there=false;
				}
				for (let i = 0; i < store.characters.length; i++) {
						if (id == store.characters[i].id && not_there) setStore({ favoritos: [...store.favoritos, store.characters[i]] })
				}
				
				console.log(not_there);





			}

		}
	};
};

export default getState;
