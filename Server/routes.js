const express = require('express');
const router = express.Router();

router.get('/categories', noteController.exploreCategories);
router.post('/search', noteController.searchnote);
router.get('/submit-note', noteController.submitnote);
router.post('/submit-note', noteController.submitnoteOnPost);