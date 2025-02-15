function HouseKeeper(name, age, yearsOfExperience, languages) {
  (this.name = name),
    (this.age = age),
    (this.yearsOfExperience = yearsOfExperience),
    (this.languages = languages);
  this.clean = function () {
    console.log(`${this.name} is cleaning...`);
  };
}

const hk1 = new HouseKeeper("Maria", 25, 4, ["english", "portuguese"]);
