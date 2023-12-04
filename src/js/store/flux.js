const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: 'FIRST',
          background: 'white',
          initial: 'white',
        },
        {
          title: 'SECOND',
          background: 'white',
          initial: 'white',
        },
      ],
      favoritesCounter: 0,
      selectedFavorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, 'green');
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

      incrementFavoritesCounter: (favorite) => {
        const store = getStore();

        // Check if the favorite is already selected
        const isFavoriteAlreadySelected = store.selectedFavorites.some(
          (fav) => fav.uid === favorite.uid
        );

        if (!isFavoriteAlreadySelected) {
          // Make sure that the selected favorite contains uid and name properties
          if (favorite.uid && favorite.name) {
            const newCounter = store.favoritesCounter + 1;
            const selectedFavorites = [...store.selectedFavorites, favorite];
            setStore({ favoritesCounter: newCounter, selectedFavorites });
            console.log('You picked a favorite!!');
          } else {
            console.error('Invalid favorite object:', favorite);
          }
        }
      },

      removeFavorite: (favorite) => {
        const store = getStore();
        const selectedFavorites = store.selectedFavorites.filter(
          (fav) => fav.uid !== favorite.uid
        );
        setStore({ selectedFavorites });
      },
    },
  };
};

export default getState;
