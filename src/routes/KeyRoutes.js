import { getKeys, addNewKey, getKeyWithID, updateKey, deleteKey } from "../controllers/KeyController";

const keyRoutes = (app) => {
    app.route('/keys')
    .get(getKeys)
    .post(addNewKey);

    app.route('/contacts/:contactId')
    .get(getKeyWithID)
    .put(updateKey)
    .delete(deleteKey);
}

export default keyRoutes