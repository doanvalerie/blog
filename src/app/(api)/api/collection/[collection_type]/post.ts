import { NextRequest, NextResponse } from 'next/server';

import { getMongooseModel } from '@models/helpers/getModels';

export async function POST(
  request: NextRequest,
  { params }: { params: { collection_type: string } }
) {
  const payload = await request.json();
  const Model = await getMongooseModel(params.collection_type);

  const document = new Model({
    ...payload,
  }).save();

  return NextResponse.json(document);
}
