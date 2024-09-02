import { NextRequest, NextResponse } from 'next/server';

import { getMongooseModel } from '@models/helpers/getModels';

export async function GET(
  request: NextRequest,
  { params }: { params: { collection_type: string } }
) {
  const Model = await getMongooseModel(params.collection_type);
  const query = await Model.find({}).exec();
  return NextResponse.json(query);
}
