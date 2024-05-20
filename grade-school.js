
// school.add('Aimee', 2);
// const roster = school.roster();
// roster[2].push('Oops.');
// const expectedDb = { 2: ['Aimee'] };
// expect(school.roster()).toEqual(expectedDb);

class GradeSchool {

    constructor() {
        this.grades = [];
    }

    /**
     * 
     * @returns object with grades and students by each grade 
     * e.g.: { '3': [ 'Chelsea', 'Logan' ], '5': [ 'Betty' ], '7': [ 'Megan' ] }
     */
    roster() {
        let result = {};
        
        if ( this.grades.length !== 0 ) {
            for ( let item of this.grades ) {
                result[item.grade] = item.students;
            }
        }

        // return result;
        // return JSON.parse(JSON.stringify(this.result));
        return structuredClone(result); // it avoids to change original value
    }

    /**
     * Add student to defined and sorted grade objects. If student exist in another grade, 
     * it's deleted from previous grade and added to the specified grade
     * @param {string} student Student name
     * @param {number} numberGrade Represent grade which student must be added
     */
    add( student, numberGrade ) {
        let studentGrade = this.getGrade( student );

        // when added grade and score when no other score was added before
        if ( this.grades.length === 0 ) {
            this.grades.push( {
                grade: numberGrade,
                students: new Array(student)
            } );
        // when student was already recorded in another grade
        } else if ( studentGrade !== -1 ) {
            for ( let item of this.grades ) {
                if ( item.grade === studentGrade ) {
                    for ( let i = 0; i < item.students.length; i++ ) {
                        // delete student if it is at the beginning of list
                        if ( i === 0 && item.students[i] === student ) {
                            item.students.shift();
                            break;
                        // delete student if it's in the middle of the list
                        } else if ( item.students[i] === student ) {
                            item.students.splice(i, 0);
                            break;
                        }
                    }
                }
            }
            // recursive call to add student at correct grade
            this.add( student, numberGrade );

        } else {
            // si el grado existe en la lista de grados
            if ( this.gradeExists(numberGrade) ) {

                for ( let item of this.grades ) {
                    if ( item.grade === numberGrade ) {
                        item.students.push(student);
                        item.students.sort();
                        break;
                    }
                }
            // if grade doesn't exist in the list
            } else {
                for ( let i = 0; i < this.grades.length; i++ ) {
                    // if grade needs to be inserted at the beginning
                    if ( i === 0 && this.grades[i].grade > numberGrade ) {
                        this.grades.unshift({
                            grade: numberGrade,
                            students: new Array(student)
                        });
                        break;
                    // if grade must be inserted at the end of list
                    } else if (numberGrade > this.grades[this.grades.length - 1].grade) {
                        this.grades.push({
                            grade: numberGrade,
                            students: new Array(student)
                        });
                        break;
                    // if grade must be inserted at the middle of list
                    } else if ( numberGrade > this.grades[i].grade && 
                        numberGrade < this.grades[i + 1].grade ) {
                        this.grades.splice(i + 1, 0, {
                            grade: numberGrade,
                            students: new Array(student)
                        });
                        break;
                    }
                }
            }
        }
    }

    /**
     * 
     * @param {number} numberGrade number grade
     * @returns return all students that were recorded on requested grade, 
     * if the grade doesn't exist, empty list is returned
     */
    grade( numberGrade ) {
        let result = [];

        if ( this.gradeExists(numberGrade) ) {
            for ( let item of this.grades) {
                if ( item.grade === numberGrade ) {
                    result = item.students;
                    break;
                }
            }
        }

        return structuredClone(result); // it avoids to change original value
    }

    /**
     * 
     * @param {string} student student name
     * @returns number of grade which requested student belongs, 
     * if the student doesn't exist at any grade, -1 is returned
     */
    getGrade( student ) {
        let result = -1;

        for (let item of this.grades) {
            for ( let itemStudent of item.students ) {
                if ( itemStudent === student ) {
                    result = item.grade;
                    break;
                }
            }

            if ( result !== -1 ) {
                break;
            }
        }

        return result;
    }

    /**
     * 
     * @param {number} numberGrade grade number
     * @returns true if grade number exists otherwise false is return.
     */
    gradeExists( numberGrade ) {
        let result = false;

        for ( let item of this.grades ) {
            if ( item.grade === numberGrade ) {
                result = true;
                break;
            }
        }

        return result;
    }
}

let school = new GradeSchool();

console.log(school.add( 'Chelsea', 3 ));
console.log(school.add( 'Logan', 3 ));
console.log(school.add( 'Betty', 5 ));
console.log(school.add( 'Megan', 7));


console.log(school.roster());