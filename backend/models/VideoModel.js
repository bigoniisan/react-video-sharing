import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import UserModel from './UserModel.js';

const VideoModel = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    description: { type: String },
    url: { type: String, required: true, unique: true },
    thumbnail: { type: String },
    duration: { type: Number },
    // tags is an array of Strings
    tags: [{ type: String }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: [{
      user: { type: UserModel },
      content: { type: String },
      createdAt: { type: Date, default: Date.now },
    }],
    playbackPosition: { type: Number, default: 0 },
    playbackStatus: { type: String, enum: ['playing', 'paused', 'stopped'], default: 'stopped' },
    uploadDate: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

}, { timestamps: true });

VideoModel.plugin(uniqueValidator);

export default VideoModel;