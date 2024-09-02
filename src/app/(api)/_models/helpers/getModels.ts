import { readdir } from 'fs/promises';
import { Model } from 'mongoose';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import connectToDatabase from '@utils/mongoose/connect';

export async function getMongooseModels() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const modelsDir = join(__dirname, '..');
  const files = await readdir(modelsDir);

  const models: Record<string, Model<any>> = {};

  for (const file of files) {
    if (file.endsWith('.ts')) {
      const { default: model } = await import(`../${file}`);

      if (model && model.modelName) {
        const modelName = model.modelName;
        models[modelName.toLowerCase()] = model;
      }
    }
  }

  return models;
}

export async function getMongooseModel(model: string) {
  await connectToDatabase();
  const models = await getMongooseModels();
  return models[model];
}
