const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],

			char_favoritos: [],

			episodes:[],
			ep_favoritos: [],

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
					.then(result => setStore({ characters: result.results })) /**Se pone result.results pq la API entrega un objeto, con info y results. */
					.catch(error => console.log('error', error));
			},

			getEpisodes: ()=>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://rickandmortyapi.com/api/episode", requestOptions)
					.then(response => response.json())
					.then(result => setStore({episodes : result.results}))
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
			set_CharFavoritos: (id) => {
				const store = getStore();
				var not_there = true;

				for (let j = 0; j < store.char_favoritos.length; j++) {
					if(id == store.char_favoritos[j].id) not_there=false;
				}
				for (let i = 0; i < store.characters.length; i++) {
						if (id == store.characters[i].id && not_there) setStore({ char_favoritos: [...store.char_favoritos, store.characters[i]] })
				}
			},

			remove_CharFavoritos: (id)=>{
				const store = getStore();
				let aux_favoritos=[];

				for (let j = 0; j < store.char_favoritos.length; j++){
					if(id != store.char_favoritos[j].id) aux_favoritos.push(store.char_favoritos[j])
				}

				setStore({char_favoritos : aux_favoritos})



			},
			set_EpFavoritos: (id) => {
				const store = getStore();
				var not_there = true;

				for (let j = 0; j < store.ep_favoritos.length; j++) {
					if(id == store.ep_favoritos[j].id) not_there=false;
				}
				for (let i = 0; i < store.episodes.length; i++) {
						if (id == store.episodes[i].id && not_there) setStore({ ep_favoritos: [...store.ep_favoritos, store.episodes[i]] })
				}
			},
			remove_EpFavoritos: (id)=>{
				const store = getStore();
				let aux_favoritos=[];

				for (let j = 0; j < store.ep_favoritos.length; j++){
					if(id != store.ep_favoritos[j].id) aux_favoritos.push(store.ep_favoritos[j])
				}

				setStore({ep_favoritos : aux_favoritos})



			}
			

		}
	};
};

export default getState;
