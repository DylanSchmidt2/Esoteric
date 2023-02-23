const router = require('express').Router();
const { Post } = require ('../../backend/models');
const withAuth = require ('../../backend/utils/auth')

router.post('/', withAuth, async (req,res)=>{
const body = req.body;
})