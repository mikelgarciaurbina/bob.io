import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    bags: {
      type: Number,
      required: true,
    },
    lastname: {
      type: String,
    },
    mobileNumber: {
      type: String,
      match: [
        /[0-9]{9}$/,
        'The value of path {PATH} ({VALUE}) is not a valid mobile number.',
      ],
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.statics = {
  get(id) {
    return this.findById(id).exec();
  },

  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  },

  removeById(id) {
    return this.deleteOne({ _id: mongoose.Types.ObjectId(id) }).exec();
  },
};

export default mongoose.model('User', UserSchema);
