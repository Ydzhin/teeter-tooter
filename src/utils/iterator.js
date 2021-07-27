function* idGenerate() {
    let id = 1;

    while (true) {yield id++;}
}
export const iterator = idGenerate();

 
