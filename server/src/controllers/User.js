import { E } from '../constants';
import User from '../models/User';

const { ACCESS_BD } = E;

async function create(req, res) {
  const {
    bags, lastname, mobileNumber, name,
  } = req.query;

  try {
    const user = new User({
      bags,
      lastname,
      mobileNumber,
      name,
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (e) {
    res.status(500).send(ACCESS_BD);
  }
}

async function get(req, res) {
  const { userId } = req.params;

  try {
    const user = await User.get(userId);
    res.json(user);
  } catch (e) {
    res.status(500).send(ACCESS_BD);
  }
}

async function list(req, res) {
  const { limit = 50, skip = 0 } = req.query;

  try {
    const users = await User.list({ limit, skip });
    res.json(users);
  } catch (e) {
    res.status(500).send(ACCESS_BD);
  }
}

async function remove(req, res) {
  const { userId } = req.params;

  try {
    const removedUser = await User.removeById(userId);
    res.json(removedUser);
  } catch (e) {
    res.status(500).send(ACCESS_BD);
  }
}

async function update(req, res) {
  const { userId } = req.params;
  const {
    bags, lastname, mobileNumber, name,
  } = req.query;

  try {
    const user = await User.get(userId);

    if (bags) user.bags = bags;
    if (lastname) user.lastname = lastname;
    if (mobileNumber) user.mobileNumber = mobileNumber;
    if (name) user.name = name;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (e) {
    res.status(500).send(ACCESS_BD);
  }
}

export default {
  create,
  get,
  list,
  remove,
  update,
};
