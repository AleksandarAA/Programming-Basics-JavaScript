function projectsCreation(input) {
    let architectName = input[0];
    let numOfProjects = Number(input[1]);

    let hoursToProject = numOfProjects * 3;

    console.log(`The architect ${architectName} will need ${hoursToProject} hours to complete ${numOfProjects} project/s. `);
}
projectsCreation(["George ","4 "])