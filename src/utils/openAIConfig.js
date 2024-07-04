import { OPENAI_KEY } from "./constant";
import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: OPENAI_KEY
  });

export default openai;