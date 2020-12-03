const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  posts: Array,
  messages: Array,
  phone: String,
  notifs: Array,
  follows: Array,
  subscriptions: Array,
});

const Users = mongoose.model('Users', userSchema);

const showSchema = mongoose.Schema({
  name: String,
  posts: Array,
  subscriberCount: Number,
});

const Shows = mongoose.model('Shows', showSchema);

const postSchema = mongoose.Schema({
  user: String,
  name: String,
  show: String,
  title: String,
  content: String,
  comments: Object,
  createdAt: Date,
  liked: Boolean,
  likedCount: Number,
});

const Posts = mongoose.model('Posts', postSchema);

module.exports = {
  Users,
  Shows,
  Posts,
};
