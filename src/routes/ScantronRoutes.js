import { getScantrons, addNewScantron, getScantronWithID, updateScantron, deleteScantron } from "../controllers/ScantronController";

const scantronRoutes = (app) => {
    app.route('/scantrons')
    .get(getScantrons)
    .post(addNewScantron);

    app.route('/contacts/:contactId')
    .get(getScantronWithID)
    .put(updateScantron)
    .delete(deleteScantron);
}

export default scantronRoutes
