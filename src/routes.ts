import { Request, Response, Router } from "express";
import { Readable } from "stream";

import multer from "multer";

const multerConfig = multer();

const router = Router();

router.post("/products", multerConfig.single("file"), (request: Request, response: Response) => {
    const { file } = request;
    const { buffer } = file;

    const readableFile = new Readable();
    readableFile.push(buffer);   
    readableFile.push(null);

    return response.send();
}
);

export { router };
