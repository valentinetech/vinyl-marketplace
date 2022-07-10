import Express from 'express';
import asyncHandler from 'express-async-handler';

// @desc     Get auction
// @route    GET /api/auction
// @access   Private
export const getAuction = asyncHandler(async (req: Express.Request, res: Express.Response) => {
  res.status(200).json({ message: 'Get auction' });
});

// @desc     Set auction
// @route    POST /api/auction
// @access   Private
export const setAuction = asyncHandler(async (req: Express.Request, res: Express.Response) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text');
  }
  res.status(200).json({
    message: 'Set auction',
    price: 50,
  });
});

// @desc     Update auction
// @route    PUT /api/auction
// @access   Private
export const updateAuction = asyncHandler(async (req: Express.Request, res: Express.Response) => {
  res.status(200).json({ message: `Update auction ${req.params.id}` });
});

// @desc     Delete auction
// @route    DELETE /api/auction
// @access   Private
export const deleteAuction = asyncHandler(async (req: Express.Request, res: Express.Response) => {
  res.status(200).json({ message: `Delete auction ${req.params.id}` });
});
