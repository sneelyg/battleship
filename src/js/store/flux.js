const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],

			favoritos: [1, 3, 5],

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
					.then(result => setStore({characters:result.results}))
					.catch(error => console.log('error', error));
			}	,

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
			setFavoritos: (index)=>{
				const store = getStore();
				const favoritos = store.favoritos.map((elm,i) =>{
					if(index==i){ return elm; }


				});
				setStore({favoritos : favoritos});

			}

		}
	};
};

export default getState;
