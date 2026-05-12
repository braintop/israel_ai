import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    res.json([
      { id: 1, name: "David" },
      { id: 2, name: "Noa" }
    ]);
  };
  export const getUserById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
  
    res.json({
      id,
      name: "David"
    });
  };
  export const createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;
  
    res.status(201).json({
      message: "User created",
      user: {
        id: Date.now(),
        name,
        email
      }
    });
  };