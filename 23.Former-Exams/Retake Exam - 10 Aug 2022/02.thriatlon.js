class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
 
    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }
 
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }
 
    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
 
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
 
        const completedCount = Math.trunc(condition / 30);
        if (completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }
 
        this.listOfFinalists.push({
            participantName: participantName,
            participantGender: this.participants[participantName],
        });
 
        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`;
    }
 
    rewarding(participantName) {
        const foundParticipant = this.listOfFinalists.find(p => p.participantName === participantName);
        if (foundParticipant === undefined) {
            return `${participantName} is not in the current finalists list`;
        }
 
        return `${participantName} was rewarded with a trophy for his performance`;
    }
 
    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return 'There are no finalists in this competition';
        }
 
        if (criteria === 'all') {
            const output = [`List of all ${this.competitionName} finalists:`];
            // Sort all participant 
            const sortedParticipants = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));
            sortedParticipants.forEach(p => output.push(p.participantName));
 
            return output.join('\n');
        }
        
        const foundFirstFinalist = this.listOfFinalists.find(p => p.participantGender === criteria);
        if (foundFirstFinalist) {
            return `${foundFirstFinalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }
 
        return `There are no ${criteria}'s that finished the competition`;
    }
}