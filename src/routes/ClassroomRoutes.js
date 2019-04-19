import { addNewClassroom, getClassrooms, getClassroomWithID, updateClassroom, deleteClassroom } from "../controllers/ClassroomController";

const classroomRoutes = (app) => {
    app.route('/classrooms')
    .get(getClassrooms)
    .post(addNewClassroom);

    app.route('/contacts/:contactId')
    .get(getClassroomWithID)
    .put(updateClassroom)
    .delete(deleteClassroom);
}

export default classroomRoutes