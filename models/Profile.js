const mongoose = reqire('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.objectId,
    ref: 'users'
  },
  handle: {
    type: String,
    reqiured: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    reqiured: true
  },
  skills: {
    type: [String],
    reqiured: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        reqiured: true
      },
      company: {
        type: String,
        reqiured: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        reqiured: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        reqiured: true
      },
      degree: {
        type: String,
        reqiured: true
      },
      field: {
        type: String,
        reqiured: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        reqiured: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
