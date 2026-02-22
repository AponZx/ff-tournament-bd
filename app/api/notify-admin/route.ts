import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.ADMIN_TELEGRAM_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ error: 'Missing Telegram keys' }, { status: 500 });
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
