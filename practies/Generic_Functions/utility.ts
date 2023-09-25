interface CoursGoal {
    title:string,
    description:string,
    completeUntil:Date
}
function createCourseGoal(title:string,description:string,date:Date):CoursGoal{
    let coursGoal:Partial<CoursGoal> ={}
    coursGoal.title =title;
    coursGoal.description = description;
    coursGoal.completeUntil =date;
    return coursGoal as CoursGoal;

}