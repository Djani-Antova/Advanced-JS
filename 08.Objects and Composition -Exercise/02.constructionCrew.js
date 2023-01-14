function constructionCrew(workerObject) {

    if(workerObject.dizziness) {
        workerObject.levelOfHydrated += 0.1 * workerObject.experience * workerObject.weight;
        workerObject.dizziness = false;
    }   
    return workerObject;    
}
constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })