import postMsg from '../models/postMsg.js';

export const getpost = async (req, res) => {
  try {
    const postmsg = await postMsg.find();
    console.log(postmsg);
    res.status(200).json(postMsg);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
  //   res.send('hibye');
};

export const createpost = async (req, res) => {
  //   res.send('hi');
  const post = req.body;
  const newpost = new postMsg(post);
  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
