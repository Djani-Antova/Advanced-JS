class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName,
        this.country = country
        this.invitedPlayers = []
    }
    newAdditions(footballPlayers) {

        for (const player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue)

            let foundPlayer = this.invitedPlayers.find(p => p.name === name);

            if (foundPlayer) {
                if (foundPlayer.playerValue > playerValue) {
                    return
                } else {
                    foundPlayer.playerValue = playerValue;
                }

            }
            this.invitedPlayers.push({
                name,
                age,
                playerValue
            })

        }
        let playerNames = []
        for (const player of this.invitedPlayers) {
            playerNames.push(player.name);
        }

        return `You successfully invite ${playerNames.join(', ')}.`;

    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');

        let foundPlayer = this.invitedPlayers.find(p => p.name === name);

        if (foundPlayer === undefined) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let priceDifference = foundPlayer.playerValue - playerOffer;
        if (priceDifference > 0) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} 
            million more are needed to sign the contract!`)
        }
            foundPlayer.playerValue = "Bought";
            return `Congratulations! You sign a contract with ${foundPlayer.name} for ${playerOffer} million dollars.`
        

    }

    ageLimit(name, age) {
        let foundPlayer = this.invitedPlayers.find(p => p.name === name);
        if (foundPlayer === undefined) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let ageDifference = age - foundPlayer.age; //26 23

        if (ageDifference > 0) {

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in {country}!`
            } else if (ageDifference >= 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else {
            return `${name} is above age limit!`
        }

    }

    transferWindowResult() {

        let output = ["Players list:"]
        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(p => output.push(`${p.name}-${p.playerValue}`))
        return output.join('\n');
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Kylian Mbappé/23/180"]));

//  You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Uncaught Error: Barbukov is not invited to the selection list!

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52





