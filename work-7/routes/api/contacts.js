const express = require('express');
const contactModel = require('../../models/contacts');
const { schemaCreateContact } = require('./contacts-validation-schema');
const { validateBody } = require('../../middlewares/validation');
const router = express.Router();

router
  .get('/', async (req, res, next) => {
    const contacts = await contactModel.listContacts();
    res.json({ status: 'success', code: 200, data: { contacts } });
  })

  .get('/:contactId', async (req, res, next) => {
    const contact = await contactModel.getContactById(req.params.contactId);
    if (contact) {
      return res.json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' });
  })

  .post('/', validateBody(schemaCreateContact), async (req, res, next) => {
    const contact = await contactModel.addContact(req.body);
    res.status(201).json({ status: 'success', code: 201, data: { contact } });
  })

  .delete('/:contactId', async (req, res, next) => {
    const contact = await contactModel.removeContact(req.params.contactId);
    if (contact) {
      return res.json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' });
  })

  .put('/:contactId', async (req, res, next) => {
    const contact = await contactModel.updateContact(
      req.params.contactId,
      req.body
    );
    if (contact) {
      return res.json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' });
  })
  .patch('/:contactId/email', async (req, res, next) => {
    const contact = await contactModel.updateContact(
      req.params.contactId,
      req.body
    );
    if (contact) {
      return res.json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' });
  });

module.exports = router;
