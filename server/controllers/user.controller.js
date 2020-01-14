const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const DUMMMY_USER_PROFILE_INFORMATION = [
  {
    id: 21,
    name: 'Patryk',
    userName: 'Paprykk123',
    places: ['Poland', 'USA'],
    avatar: 'https://avatars3.githubusercontent.com/u/47067438?s=460&v=40',
    profileBg: 'https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg',
    description:
      'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym',
    followersNumber: 100,
    followingNumber: 12,
    accountType: 'free'
  },

  {
    id: 12,
    name: 'Peter',
    userName: 'SuperPeter',
    places: ['Vietnam', 'USA'],
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    description: 'Check out my profile!',
    profileBg:
      'https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg',
    followersNumber: 1520,
    followingNumber: 124,
    accountType: 'vip'
  }
];
const getUserProfile = (req, res) => {
  const userId = req.params.uid;
  const userProfile = DUMMMY_USER_PROFILE_INFORMATION.filter(user => user.id == userId);
  res.json(userProfile);
};

const createNewUser = async (req, res, next) => {
  const newUser = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  };

  const user = new MongoClient(url);

  try {
    await user.connect();
    const db = client.db();
    const result = db.collection('users').insertOne(newUser);
  } catch (error) {
    return res.json({ message: 'Couldnt create new user.' });
  }
  user.close();
  res.json(newUser);
};

const getUsers = async (req, res, next) => {};

exports.getUserProfile = getUserProfile;
exports.createNewUser = createNewUser;
