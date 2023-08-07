import { removeFirstChar } from '@/lib';
import { NextResponse } from 'next/server';

const filePath = `${process.env.NEXT_PUBLIC_SITE_URL}/assets/data.json`;

export async function GET() {
  const response = await fetch(filePath);

  let json: IProduct[] = (await response.json()) || [];

  json = JSON.parse(JSON.stringify(json), (key, value) => {
    if (
      key === 'image' ||
      key === 'categoryImage' ||
      key === 'first' ||
      key === 'second' ||
      key === 'third'
    ) {
      value.mobile = removeFirstChar(value?.mobile);
      value.tablet = removeFirstChar(value?.tablet);
      value.desktop = removeFirstChar(value?.desktop);
    }
    return value;
  });

  // json = json.sort((a, b) => Number(b.new) - Number(a.new)) || [];

  return NextResponse.json(json);
}
