import Express from 'express';

// @desc     Get auction
// @route    GET /api/auction
// @access   Private
export const getAuction = (req: Express.Request, res: Express.Response) => {
  res.status(200).json({ message: 'Get auction' });
};

// @desc     Set auction
// @route    POST /api/auction
// @access   Private
export const setAuction = (req: Express.Request, res: Express.Response) => {
  res.status(200).json({
    message: 'Set auction',
    price: 50,
  });
};

// @desc     Update auction
// @route    PUT /api/auction
// @access   Private
export const updateAuction = (req: Express.Request, res: Express.Response) => {
  res.status(200).json({ message: `Update auction ${req.params.id}` });
};

// @desc     Delete auction
// @route    DELETE /api/auction
// @access   Private
export const deleteAuction = (req: Express.Request, res: Express.Response) => {
  res.status(200).json({ message: `Delete auction ${req.params.id}` });
};

// module.exports = {
//   getAuction,
//   setAuction,
//   updateAuction,
//   deleteAuction,
// };
