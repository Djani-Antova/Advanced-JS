function heroes() {
  return {
    fighter(name) {
      const state = {
        name,
        health: 100,
        stamina: 100
      };

      state.fight = () => {
        state.stamina--;
        console.log(`${state.name} slashes at the foe!`);
      };

      return state;
    },
    mage(name) {
      const state = {
        name,
        health: 100,
        mana: 100,
      };

      state.cast = (spell) => {
        state.mana--;
        console.log(`${state.name} cast ${spell}`);
      }

      return state;
    }
  };
}

const heroes = createHeroes();

const fighter = heroes.fighter("Conan");
fighter.fight(); // Output: "Conan slashes at the foe!"

const mage = heroes.mage("Gandalf");
mage.cast("fireball"); // Output: "Gandalf cast fireball"
