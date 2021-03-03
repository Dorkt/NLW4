import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();

const sendMailController = new SendMailController();

const asnwerController = new AnswerController();

const npsController = new NpsController();

router.post("/users", userController.create);

router.get("/surveys/all", surveyController.show);
router.post("/surveys", surveyController.create);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", asnwerController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };